import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, FileText, ImageIcon, Type, Film, MessageSquare, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold">ClipIQ</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">
            Try Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20" variant="outline">
                AI-Powered Video Analysis
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Personal AI for
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Video Analysis & Creation
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Instantly analyze content, optimize engagement, and generate high-quality thumbnails, titles, and
                scripts with advanced AI technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get started for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2022.38.18-zzSj7XkXLNb2hzhOZTfcFzCjuXGqml.png"
              alt="ClipIQ Interface"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20" variant="outline">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Tools for Content Creators</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform your content creation process with our cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Sparkles className="h-6 w-6 text-blue-400" />}
                title="AI Analysis"
                description="Get deep insights into your video content with our advanced AI analysis."
              />
              <FeatureCard
                icon={<FileText className="h-6 w-6 text-blue-400" />}
                title="Smart Transcription"
                description="Generate accurate transcriptions for subtitles, blog posts, or content repurposing."
              />
              <FeatureCard
                icon={<ImageIcon className="h-6 w-6 text-blue-400" />}
                title="Thumbnail Generation"
                description="Create eye-catching thumbnails using AI to boost your click-through rates."
              />
              <FeatureCard
                icon={<Type className="h-6 w-6 text-blue-400" />}
                title="Title Generation"
                description="Craft attention-grabbing, SEO-optimized titles for maximum views."
              />
              <FeatureCard
                icon={<Film className="h-6 w-6 text-blue-400" />}
                title="Shot Script"
                description="Get detailed instructions to recreate viral videos and improve your content."
              />
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6 text-blue-400" />}
                title="AI Agent Discussions"
                description="Engage in deep conversations about your content strategy with your AI companion."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20" variant="outline">
                Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How ClipIQ Works</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the power of AI-driven content analysis in three simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StepCard
                number="01"
                title="Connect Your Content"
                description="Simply paste your YouTube video URL and let our AI get to work."
              />
              <StepCard
                number="02"
                title="AI Analysis"
                description="Our advanced algorithms analyze every aspect of your content."
              />
              <StepCard
                number="03"
                title="Receive Insights"
                description="Get actionable insights and strategic recommendations to improve your content."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20" variant="outline">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Find answers to common questions about ClipIQ</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <FaqItem
                  question="How does ClipIQ work?"
                  answer="ClipIQ uses advanced AI algorithms to analyze your YouTube videos, processing content, audio, and metadata to provide insights, generate assets, and offer strategic recommendations."
                />
                <FaqItem
                  question="Is ClipIQ free to use?"
                  answer="Yes, ClipIQ offers a free plan with basic features. We also provide premium plans with additional capabilities for professional content creators."
                />
                <FaqItem
                  question="What types of videos can I analyze?"
                  answer="You can analyze any public YouTube video with ClipIQ. Our AI is trained on diverse content types including vlogs, tutorials, reviews, gaming, and educational content."
                />
                <FaqItem
                  question="How accurate is the AI-generated transcription?"
                  answer="Our AI transcription technology achieves over 95% accuracy for clear audio in English. Accuracy may vary for videos with background noise, multiple speakers, or non-English content."
                />
                <FaqItem
                  question="Is my video content private and secure?"
                  answer="Yes, we take privacy seriously. We only analyze the videos you explicitly submit and don't store video content itself - only the analytical data derived from it. All data is processed securely."
                />
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Content?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join creators worldwide leveraging AI to unlock unprecedented content insights
              </p>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
              <span className="font-semibold">ClipIQ</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">© 2024 ClipIQ. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="mt-4 flex items-center text-blue-400 font-medium">
          <span>Learn more</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </CardContent>
    </Card>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-blue-400">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }) {
  return (
    <AccordionItem value={question} className="border-b border-gray-800">
      <AccordionTrigger className="text-left font-medium py-4 text-gray-200">{question}</AccordionTrigger>
      <AccordionContent className="text-gray-400 pb-4">{answer}</AccordionContent>
    </AccordionItem>
  )
}

