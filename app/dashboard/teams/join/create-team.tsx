'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { slugify } from '@/lib/utils'
import { useSession } from 'next-auth/react'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
  teamName: z.string().min(2, {
    message: 'Team name must be at least 2 characters.'
  }),
  teamUrl: z.string().min(2, {
    message: 'Team URL must be at least 2 characters.'
  })
})

export function CreateTeamForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { update } = useSession()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamName: '',
      teamUrl: ''
    }
  })

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'teamName') {
        const teamUrl = slugify(value.teamName || '')
        form.setValue('teamUrl', teamUrl, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true
        })
      }
    })
    return () => subscription.unsubscribe()
  }, [form])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true)

      const response = await fetch('/api/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const error = await response.text()
        throw new Error(error || 'Failed to create team')
      }

      const result = await response.json()
      toast.success('Success', {
        description: `Team "${result.name}" has been created successfully`
      })
      await update()
      router.replace(`/dashboard/${data.teamUrl}/chatbots`)
    } catch (error) {
      toast.error('Error', {
        description:
          error instanceof Error ? error.message : 'Error creating team'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your team name" {...field} />
              </FormControl>
              <FormDescription>
                {`This is your team's display name`}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="teamUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team URL</FormLabel>
              <FormControl>
                <Input placeholder="Enter team URL" {...field} />
              </FormControl>
              <FormDescription>
                {`This will be used as your team's slug`}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Team'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
