import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { CreateTeamForm } from './create-team'

export default function JoinTeamPage() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Join</h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create team</CardTitle>
          <CardDescription>
            This is your team’s visible name within Omnichat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateTeamForm />
        </CardContent>
      </Card>
    </div>
  )
}
