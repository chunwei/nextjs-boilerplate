import { motion } from 'framer-motion'
import { ModelInfoCard } from '@/app/dashboard/[team]/chatbot/[botid]/playground/components/model-info-card'

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-2"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 max-w-xl">
        <ModelInfoCard />
      </div>
    </motion.div>
  )
}
