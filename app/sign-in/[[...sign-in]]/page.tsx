'use client'
import { SignInWithPasskeyButton } from '@/components/SignInWithPassKey'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { FaGoogle } from 'react-icons/fa'

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.03),rgba(0,0,0,0))] pointer-events-none" /> */}

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                <SignIn.Root>
                    <SignIn.Step
                        name="start"
                        className="w-full max-w-md space-y-8 bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-800 shadow-2xl"
                    >
                        {/* Branding */}
                        <div className="flex flex-col items-center gap-3 mb-6">
                            {/* <Sparkles className="text-primary h-10 w-10" /> */}
                            <h1 className="text-3xl font-bold tracking-tight text-white">
                                Welcome to GenZ Agent
                            </h1>
                            <p className="text-sm text-gray-400">
                                Sign in to continue your AI-powered journey
                            </p>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-4">
                            <Clerk.Connection
                                asChild
                                name="google"
                                className="w-full relative overflow-hidden"
                            >
                                <button className="w-full flex items-center justify-center gap-3 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white cursor-pointer">
                                    <FaGoogle className="h-5 w-5" />
                                    Continue with Google
                                </button>
                            </Clerk.Connection>
                            <SignInWithPasskeyButton />

                            {/* Separator */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-gray-700" />
                                </div>
                                <div className="relative flex justify-center text-xs text-gray-400">
                                    <span className="bg-black px-2">Or continue with</span>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="space-y-6">
                                <Clerk.GlobalError className="text-red-400 text-sm" />

                                <Clerk.Field name="identifier" className="space-y-2">
                                    <Clerk.Label className="text-sm font-medium text-gray-300">
                                        Email or username
                                    </Clerk.Label>
                                    <Clerk.Input
                                        type="text"
                                        required
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-primary"
                                    />
                                    <Clerk.FieldError className="text-red-400 text-sm" />
                                </Clerk.Field>

                                <Clerk.Field name="password" className="space-y-2">
                                    <Clerk.Label className="text-sm font-medium text-gray-300">
                                        Password
                                    </Clerk.Label>
                                    <Clerk.Input
                                        type="password"
                                        required
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-primary"
                                    />
                                    <Clerk.FieldError className="text-red-400 text-sm" />
                                </Clerk.Field>

                                <SignIn.Action
                                    submit
                                    className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 rounded-lg py-3 text-white font-medium transition-all duration-200"
                                >
                                    Sign In
                                </SignIn.Action>
                            </div>

                            {/* Switch Mode */}
                            <p className="text-center text-sm text-gray-400 mt-4">
                                Don&apos;t have an account?{' '}
                                <Clerk.Link
                                    navigate="sign-up"
                                    className="font-medium text-blue-400 hover:text-blue-500 transition-colors"
                                >
                                    Create account
                                </Clerk.Link>
                            </p>
                        </div>
                    </SignIn.Step>
                </SignIn.Root>
            </div>
        </div>
    )
}

