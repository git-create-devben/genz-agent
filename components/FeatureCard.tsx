import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-blue-500">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

export default FeatureCard

