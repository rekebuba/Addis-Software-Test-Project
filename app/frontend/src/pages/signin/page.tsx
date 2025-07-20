import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Music, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate email sign-in process
        await new Promise((resolve) => setTimeout(resolve, 1500))

        if (email && password) {
            alert(`Successfully signed in with email: ${email} 🎵`)
            navigate("/")
        } else {
            alert("Please fill in all fields")
        }
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-indigo-500/20 rounded-full animate-bounce delay-500"></div>
            </div>

            <Card className="w-full max-w-md bg-black/40 backdrop-blur-md border-white/20 relative z-10">
                <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="relative">
                            <Music className="h-12 w-12 text-purple-400" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold text-white">Welcome Back</CardTitle>
                        <CardDescription className="text-white/70">
                            Sign in to your SoundWave account and continue your musical journey
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <Separator className="w-full bg-white/20" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-black/40 px-2 text-white/60">Or continue with email</span>
                        </div>
                    </div>

                    {/* Email Sign In Form */}
                    <form onSubmit={handleEmailSignIn} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/80">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-white/80">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2 text-sm text-white/70">
                                <input type="checkbox" className="rounded border-white/20 bg-white/10" />
                                <span>Remember me</span>
                            </label>
                            <Link to="#" className="text-sm text-purple-400 hover:text-purple-300">
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-medium py-3"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>

                    <div className="text-center">
                        <span className="text-white/70 text-sm">{"Don't have an account? "}</span>
                        <Link to="/signup" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                            Sign up
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link to="/" className="text-white/60 hover:text-white/80 text-sm">
                            ← Back to Home
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
