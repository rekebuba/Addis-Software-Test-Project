"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, ArrowLeft, Play, Download, Headphones, Users, Smartphone, Globe, Shield, Zap } from "lucide-react"
import { Link } from "react-router-dom";

export default function FeaturesPage() {
    const features = [
        {
            icon: <Music className="h-12 w-12" />,
            title: "100M+ Songs",
            description:
                "Access to the world's largest music library with every genre imaginable. From the latest hits to timeless classics.",
            details: ["Latest releases", "Classic hits", "Independent artists", "Exclusive content"],
        },
        {
            icon: <Download className="h-12 w-12" />,
            title: "Offline Listening",
            description: "Download your favorite tracks and listen anywhere, anytime, even without an internet connection.",
            details: ["Download up to 10,000 songs", "Works on all devices", "Smart downloads", "Auto-sync playlists"],
        },
        {
            icon: <Headphones className="h-12 w-12" />,
            title: "Hi-Fi Quality",
            description: "Crystal clear audio with lossless streaming up to 320kbps for the ultimate listening experience.",
            details: ["320kbps streaming", "Lossless audio", "Spatial audio", "Equalizer settings"],
        },
        {
            icon: <Users className="h-12 w-12" />,
            title: "Social Features",
            description: "Share playlists, discover music through friends, and connect with artists around the world.",
            details: ["Share playlists", "Friend activity", "Artist following", "Social recommendations"],
        },
        {
            icon: <Smartphone className="h-12 w-12" />,
            title: "Multi-Device",
            description: "Seamlessly switch between your phone, tablet, computer, and smart speakers.",
            details: ["iOS & Android apps", "Desktop applications", "Web player", "Smart speaker support"],
        },
        {
            icon: <Globe className="h-12 w-12" />,
            title: "Global Access",
            description: "Available in 180+ countries with localized content and regional music discovery.",
            details: ["180+ countries", "Local music", "Regional charts", "Cultural playlists"],
        },
        {
            icon: <Shield className="h-12 w-12" />,
            title: "Privacy First",
            description: "Your listening habits are private. We don't sell your data or compromise your privacy.",
            details: ["Data encryption", "Private listening", "No data selling", "GDPR compliant"],
        },
        {
            icon: <Zap className="h-12 w-12" />,
            title: "Lightning Fast",
            description: "Instant playback, quick search results, and seamless streaming with our optimized infrastructure.",
            details: ["Instant playback", "Fast search", "Global CDN", "99.9% uptime"],
        },
    ]

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
                    <Link to="/features" className="text-sm font-medium text-purple-400 border-b-2 border-purple-400">
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

            <div className="container mx-auto px-4 py-12">
                {/* Back Button */}
                <Button asChild variant="ghost" className="text-white/80 hover:text-white mb-8">
                    <Link to="/">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                </Button>

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Powerful Features for
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {" "}
                            Music Lovers
                        </span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Discover all the amazing features that make SoundWave the ultimate music streaming platform
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <CardContent className="p-8">
                                <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-white/70 mb-6">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-center text-white/60">
                                            <Play className="h-3 w-3 text-purple-400 mr-2 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience These Features?</h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        Start your free trial today and discover why millions of users choose SoundWave for their music streaming
                        needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        >
                            Start Free Trial
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                            View Pricing
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
