export default function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-blue-400">{number}</span>
        </div>
        <h3 className="text-xl text-blue-500 font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    )
  }