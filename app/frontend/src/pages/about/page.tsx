"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, ArrowLeft, Users, Globe, Heart } from "lucide-react"
import { Link } from "react-router-dom";

export default function AboutPage() {
    const stats = [
        { number: "100M+", label: "Songs Available" },
        { number: "50M+", label: "Active Users" },
        { number: "180+", label: "Countries" },
        { number: "2019", label: "Founded" },
    ]

    const team = [
        {
            name: "Alex Chen",
            role: "CEO & Founder",
            bio: "Former Spotify engineer with a passion for democratizing music access worldwide.",
        },
        {
            name: "Sarah Johnson",
            role: "Head of Product",
            bio: "Product visionary focused on creating intuitive music discovery experiences.",
        },
        {
            name: "Marcus Rodriguez",
            role: "CTO",
            bio: "Tech leader specializing in scalable streaming infrastructure and audio quality.",
        },
        {
            name: "Emily Zhang",
            role: "Head of Design",
            bio: "Design expert crafting beautiful and accessible user experiences for all.",
        },
    ]

    const values = [
        {
            icon: <Music className="h-8 w-8" />,
            title: "Music First",
            description: "Every decision we make puts music and artists at the center of our platform.",
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Community Driven",
            description: "We believe music brings people together and build features that foster connection.",
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Global Access",
            description: "Music is universal. We work to make it accessible to everyone, everywhere.",
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: "Artist Support",
            description: "We're committed to fair compensation and supporting artists at every level.",
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
                    <Link to="/features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link to="/pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link to="/about" className="text-sm font-medium text-purple-400 border-b-2 border-purple-400">
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
                        About
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {" "}
                            SoundWave
                        </span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        We're on a mission to connect the world through music, making every song accessible to every person,
                        everywhere.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-white/70">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <Card className="bg-white/5 backdrop-blur-md border-white/10">
                        <CardContent className="p-12">
                            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
                            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                                <p>
                                    SoundWave was born from a simple belief: music should be accessible to everyone, everywhere. Founded
                                    in 2019 by a team of music lovers and tech innovators, we set out to create the most comprehensive and
                                    user-friendly music streaming platform in the world.
                                </p>
                                <p>
                                    Starting with just a few thousand songs and a handful of users, we've grown to serve over 50 million
                                    music lovers across 180 countries. Our journey has been driven by our community's passion for music
                                    and our commitment to supporting artists at every level.
                                </p>
                                <p>
                                    Today, SoundWave hosts over 100 million songs, from chart-topping hits to underground gems, ensuring
                                    that every musical taste and cultural background is represented on our platform.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 flex justify-center">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                    <p className="text-white/70">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">
                                            {member.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                                    <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                                    <p className="text-white/70 text-sm">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Musical Journey</h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        Be part of a community that celebrates music in all its forms. Start your free trial today and discover your
                        next favorite song.
                    </p>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                        Start Free Trial
                    </Button>
                </div>
            </div>
        </div>
    )
}
