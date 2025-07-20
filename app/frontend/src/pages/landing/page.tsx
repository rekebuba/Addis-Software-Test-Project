import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Play,
    Pause,
    Music,
    Users,
    Download,
    Headphones,
    Star,
    Check,
    Volume2,
    Heart,
    Shuffle,
    SkipForward,
    SkipBack,
} from "lucide-react"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

export default function LandingPage() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTrack, setCurrentTrack] = useState(0)

    const tracks = [
        {
            title: "Midnight Dreams",
            artist: "Luna Echo",
            duration: "3:24",
            image: "/placeholder.svg?height=48&width=48&text=Nocturnal+Vibes",
        },
        {
            title: "Electric Pulse",
            artist: "Neon Waves",
            duration: "4:12",
            image: "/placeholder.svg?height=48&width=48&text=Digital+Hearts",
        },
        {
            title: "Ocean Breeze",
            artist: "Coastal Vibes",
            duration: "3:45",
            image: "/placeholder.svg?height=48&width=48&text=Summer+Sessions",
        },
    ]

    const features = [
        {
            icon: <Music className="h-8 w-8" />,
            title: "100M+ Songs",
            description: "Access to the world's largest music library with every genre imaginable",
        },
        {
            icon: <Download className="h-8 w-8" />,
            title: "Offline Listening",
            description: "Download your favorite tracks and listen anywhere, anytime",
        },
        {
            icon: <Headphones className="h-8 w-8" />,
            title: "Hi-Fi Quality",
            description: "Crystal clear audio with lossless streaming up to 320kbps",
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Social Features",
            description: "Share playlists, discover music through friends, and connect with artists",
        },
    ]

    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            features: ["Limited skips", "Ads between songs", "Standard quality", "Mobile only"],
            popular: false,
        },
        {
            name: "Premium",
            price: "$9.99",
            period: "month",
            features: ["Unlimited skips", "No ads", "Hi-Fi quality", "Offline downloads", "All devices"],
            popular: true,
        },
        {
            name: "Family",
            price: "$14.99",
            period: "month",
            features: ["6 Premium accounts", "Family mix playlist", "Parental controls", "All Premium features"],
            popular: false,
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setCurrentTrack((prev) => (prev + 1) % tracks.length)
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [isPlaying, tracks.length])

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            {/* Header */}
            <header className="relative z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-black/20 border-b border-white/10">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="relative">
                        <Music className="h-8 w-8 text-purple-400" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-xl font-bold text-white">SoundWave</span>
                </Link>
                <nav className="ml-auto flex gap-6">
                    <Link to="/features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link to="/pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link to="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        About
                    </Link>
                </nav>
                <div className="ml-6 flex gap-2">
                    <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                        <Link to="/signin">Sign In</Link>
                    </Button>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Try Free
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                <div className="relative container mx-auto text-center">
                    <div className="mb-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm text-white">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>Over 50M users worldwide</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Your Music,{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                            Unlimited
                        </span>
                    </h1>

                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Stream over 100 million songs, discover new artists, and create the perfect soundtrack for your life. All in
                        stunning Hi-Fi quality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Start Free Trial
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
                        >
                            Explore Music
                        </Button>
                    </div>

                    {/* Floating Music Player Demo */}
                    <div className="max-w-md mx-auto">
                        <Card className="bg-black/40 backdrop-blur-md border-white/20 overflow-hidden">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10">
                                        <img
                                            src={tracks[currentTrack].image || "/placeholder.svg"}
                                            alt={`${tracks[currentTrack].title} cover`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = `/placeholder.svg?height=48&width=48&text=${encodeURIComponent(tracks[currentTrack].title.charAt(0))}`
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="text-white font-medium">{tracks[currentTrack].title}</h3>
                                        <p className="text-white/60 text-sm">{tracks[currentTrack].artist}</p>
                                    </div>
                                    <Heart className="h-5 w-5 text-white/60 hover:text-pink-400 cursor-pointer transition-colors" />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <Shuffle className="h-4 w-4 text-white/60 hover:text-white cursor-pointer transition-colors" />
                                    <SkipBack className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                                    <Button
                                        size="sm"
                                        className="rounded-full w-10 h-10 bg-white text-black hover:bg-white/90"
                                        onClick={() => setIsPlaying(!isPlaying)}
                                    >
                                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                    </Button>
                                    <SkipForward className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                                    <Volume2 className="h-4 w-4 text-white/60 hover:text-white cursor-pointer transition-colors" />
                                </div>

                                <div className="w-full bg-white/20 rounded-full h-1 mb-2">
                                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full w-1/3 animate-pulse"></div>
                                </div>

                                <div className="flex justify-between text-xs text-white/60">
                                    <span>1:23</span>
                                    <span>{tracks[currentTrack].duration}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-bounce"></div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose SoundWave?</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Experience music like never before with our cutting-edge features designed for true music lovers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 flex justify-center">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                    <p className="text-white/70">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">100M+</div>
                            <div className="text-white/70">Songs Available</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">50M+</div>
                            <div className="text-white/70">Active Users</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">180+</div>
                            <div className="text-white/70">Countries</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">24/7</div>
                            <div className="text-white/70">Music Streaming</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Plan</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Start free, upgrade when you're ready. Cancel anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, index) => (
                            <Card
                                key={index}
                                className={`relative bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-400 scale-105" : ""}`}
                            >
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500">
                                        Most Popular
                                    </Badge>
                                )}
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        <span className="text-white/70">/{plan.period}</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-white/80">
                                                <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full ${plan.popular
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                                                : "bg-white/10 hover:bg-white/20 text-white"
                                            }`}
                                    >
                                        {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Musical Journey?</h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Join millions of music lovers and discover your next favorite song today.
                    </p>

                    <div className="max-w-md mx-auto mb-8">
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            />
                            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                                Start Free
                            </Button>
                        </div>
                        <p className="text-sm text-white/60 mt-2">No credit card required. Cancel anytime.</p>
                    </div>

                    <div className="flex justify-center space-x-8 text-white/60">
                        <div className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-400" />
                            <span>30-day free trial</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-400" />
                            <span>No ads</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-400" />
                            <span>Unlimited skips</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-black/40 backdrop-blur-md border-t border-white/10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Music className="h-6 w-6 text-purple-400" />
                                <span className="text-lg font-bold text-white">SoundWave</span>
                            </div>
                            <p className="text-white/70">
                                The ultimate music streaming experience with unlimited access to your favorite songs.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-white/70">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Mobile App
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Desktop App
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-white/70">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Press
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-white/70">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Community
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white/60 text-sm">© 2024 SoundWave. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="#" className="text-white/60 hover:text-white transition-colors">
                                Privacy
                            </Link>
                            <Link to="#" className="text-white/60 hover:text-white transition-colors">
                                Terms
                            </Link>
                            <Link to="#" className="text-white/60 hover:text-white transition-colors">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
