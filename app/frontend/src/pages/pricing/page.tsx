import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, ArrowLeft, Check, X } from "lucide-react"
import { Link } from "react-router-dom";

export default function PricingPage() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "Perfect for casual listeners",
            features: [
                { name: "Limited skips (6 per hour)", included: true },
                { name: "Ads between songs", included: true },
                { name: "Standard quality (128kbps)", included: true },
                { name: "Mobile only", included: true },
                { name: "Shuffle play only", included: true },
                { name: "Offline downloads", included: false },
                { name: "Hi-Fi quality", included: false },
                { name: "Unlimited skips", included: false },
            ],
            popular: false,
            cta: "Get Started",
        },
        {
            name: "Premium",
            price: "$9.99",
            period: "month",
            description: "Best for individual music lovers",
            features: [
                { name: "Unlimited skips", included: true },
                { name: "No ads", included: true },
                { name: "Hi-Fi quality (320kbps)", included: true },
                { name: "Offline downloads", included: true },
                { name: "All devices", included: true },
                { name: "On-demand playback", included: true },
                { name: "Lyrics display", included: true },
                { name: "Crossfade", included: true },
            ],
            popular: true,
            cta: "Start Free Trial",
        },
        {
            name: "Family",
            price: "$14.99",
            period: "month",
            description: "Perfect for families up to 6 members",
            features: [
                { name: "6 Premium accounts", included: true },
                { name: "Family mix playlist", included: true },
                { name: "Parental controls", included: true },
                { name: "All Premium features", included: true },
                { name: "Individual profiles", included: true },
                { name: "Kid-safe mode", included: true },
                { name: "Shared family library", included: true },
                { name: "Activity dashboard", included: true },
            ],
            popular: false,
            cta: "Start Family Plan",
        },
    ]

    const faqs = [
        {
            question: "Can I cancel anytime?",
            answer:
                "Yes, you can cancel your subscription at any time. Your subscription will remain active until the end of your current billing period.",
        },
        {
            question: "Is there a free trial?",
            answer: "Yes! Premium and Family plans come with a 30-day free trial. No credit card required to start.",
        },
        {
            question: "What's the difference between Free and Premium?",
            answer:
                "Premium removes ads, offers unlimited skips, Hi-Fi quality audio, offline downloads, and works on all devices.",
        },
        {
            question: "How does Family plan work?",
            answer:
                "Family plan includes 6 individual Premium accounts that can be managed by the plan owner, with parental controls and shared features.",
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
                    <Link to="/pricing" className="text-sm font-medium text-purple-400 border-b-2 border-purple-400">
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
                        Choose Your
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {" "}
                            Perfect Plan
                        </span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Start free, upgrade when you're ready. All plans include access to 100M+ songs.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-400 scale-105" : ""
                                }`}
                        >
                            {plan.popular && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500">
                                    Most Popular
                                </Badge>
                            )}
                            <CardContent className="p-8">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-white/60 mb-4">{plan.description}</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        <span className="text-white/70">/{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            {feature.included ? (
                                                <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                                            ) : (
                                                <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                                            )}
                                            <span className={`text-sm ${feature.included ? "text-white/80" : "text-white/40"}`}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full ${plan.popular
                                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                                            : "bg-white/10 hover:bg-white/20 text-white"
                                        }`}
                                >
                                    {plan.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                                    <p className="text-white/70">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
