import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, FileText, ImageIcon, Type, Film, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import { SignInButton } from "@clerk/nextjs"

interface FeatureCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  number?:string;
  question?:string;
  answer?:string;
}
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed bg-black top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between ">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles className="h-7 w-7 text-blue-500 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30"></div>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GenZ
              </span>
              <span className="text-xl font-light text-white ml-1">Agent</span>
            </div>
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
            <SignInButton />
          </nav>
          {/* <ThemeToggle />  */}
          <Button variant="outline" className="hidden md:inline-flex bg-white text-blue-900 hover:bg-gray-100 cursor-pointer">
            <Link href="/sign-in" className="text-blue-900 hover:underline">Sign In</Link>
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
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" /> */}
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
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
              <div className="flex flex-col items-center gap-4 w-full max-w-xl mx-auto">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Paste your YouTube URL here..."
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <Button
                    size="lg"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
                  >
                    Analyze
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-400">
                  Try it now - No account required
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-gradient-to-t from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-all" variant="outline">
                Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Powerful AI Tools for Content Creators
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Transform your content creation process with our cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

              <FeatureCard
                icon={<Sparkles className="h-8 w-8 text-blue-400 group-hover:animate-pulse" />}
                title="AI Analysis"
                description="Get deep insights into your video content with our advanced AI analysis."
              />
              <FeatureCard
                icon={<FileText className="h-8 w-8 text-purple-400 group-hover:animate-pulse" />}
                title="Smart Transcription"
                description="Generate accurate transcriptions for subtitles, blog posts, or content repurposing."
              />
              <FeatureCard
                icon={<ImageIcon className="h-8 w-8 text-pink-400 group-hover:animate-pulse" />}
                title="Thumbnail Generation"
                description="Create eye-catching thumbnails using AI to boost your click-through rates."
              />
              <FeatureCard
                icon={<Type className="h-8 w-8 text-indigo-400 group-hover:animate-pulse" />}
                title="Title Generation"
                description="Craft attention-grabbing, SEO-optimized titles for maximum views."
              />
              <FeatureCard
                icon={<Film className="h-8 w-8 text-cyan-400 group-hover:animate-pulse" />}
                title="Shot Script"
                description="Get detailed instructions to recreate viral videos and improve your content."
              />
              <FeatureCard
                icon={<MessageSquare className="h-8 w-8 text-teal-400 group-hover:animate-pulse" />}
                title="AI Agent Discussions"
                description="Engage in deep conversations about your content strategy with your AI companion."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-black/5">
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
                  question="How does GenZ Agent work?"
                  answer="GenZ uses advanced AI algorithms to analyze your YouTube videos, processing content, audio, and metadata to provide insights, generate assets, and offer strategic recommendations."
                />
                <FaqItem
                  question="Is GenZ Agent free to use?"
                  answer="Yes, GenZ Agent offers a free plan with basic features. We also provide premium plans with additional capabilities for professional content creators."
                />
                <FaqItem
                  question="What types of videos can I analyze?"
                  answer="You can analyze any public YouTube video with GenZ. Our AI is trained on diverse content types including vlogs, tutorials, reviews, gaming, and educational content."
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
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sparkles className="h-7 w-7 text-blue-500 animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30"></div>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  GenZ
                </span>
                <span className="text-xl font-light text-white ml-1">Agent</span>
              </div>
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
          <div className="mt-8 text-center text-sm text-gray-500">© 2024 GenZ Agent. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}



function FeatureCard({ icon, title, description }: FeatureCardProps) {
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

function StepCard({ number, title, description }: FeatureCardProps) {
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question} className="border-b border-gray-800">
      <AccordionTrigger className="text-left font-medium py-4 text-gray-200">{question}</AccordionTrigger>
      <AccordionContent className="text-gray-400 pb-4">{answer}</AccordionContent>
    </AccordionItem>
  )
}

