import * as React from "react"
import { Link } from "react-router-dom";
import {
    Heart,
    Mic2,
    Radio,
    ListMusic,
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Shuffle,
    Repeat,
    MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"

const recentlyPlayed = [
    {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        image: "/placeholder.svg?height=300&width=300",
        duration: "3:20",
    },
    {
        id: 2,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        album: "Fine Line",
        image: "/placeholder.svg?height=300&width=300",
        duration: "2:54",
    },
    {
        id: 3,
        title: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        image: "/placeholder.svg?height=300&width=300",
        duration: "3:23",
    },
    {
        id: 4,
        title: "Good 4 U",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        image: "/placeholder.svg?height=300&width=300",
        duration: "2:58",
    },
    {
        id: 5,
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        album: "F*CK LOVE 3",
        image: "/placeholder.svg?height=300&width=300",
        duration: "2:21",
    },
    {
        id: 6,
        title: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        image: "/placeholder.svg?height=300&width=300",
        duration: "3:58",
    },
]

const madeForYou = [
    {
        id: 1,
        title: "Discover Weekly",
        description: "Your weekly mixtape of fresh music",
        image: "/placeholder.svg?height=300&width=300",
    },
    {
        id: 2,
        title: "Release Radar",
        description: "Catch all the latest music from artists you follow",
        image: "/placeholder.svg?height=300&width=300",
    },
    {
        id: 3,
        title: "Daily Mix 1",
        description: "The Weeknd, Dua Lipa, Harry Styles and more",
        image: "/placeholder.svg?height=300&width=300",
    },
    {
        id: 4,
        title: "Daily Mix 2",
        description: "Olivia Rodrigo, Taylor Swift, Billie Eilish and more",
        image: "/placeholder.svg?height=300&width=300",
    },
]

const topArtists = [
    {
        id: 1,
        name: "The Weeknd",
        image: "/placeholder.svg?height=300&width=300",
        followers: "85.2M",
    },
    {
        id: 2,
        name: "Dua Lipa",
        image: "/placeholder.svg?height=300&width=300",
        followers: "73.1M",
    },
    {
        id: 3,
        name: "Harry Styles",
        image: "/placeholder.svg?height=300&width=300",
        followers: "68.9M",
    },
    {
        id: 4,
        name: "Olivia Rodrigo",
        image: "/placeholder.svg?height=300&width=300",
        followers: "45.3M",
    },
    {
        id: 5,
        name: "Taylor Swift",
        image: "/placeholder.svg?height=300&width=300",
        followers: "92.7M",
    },
]

const playlists = [
    { name: "Liked Songs", icon: Heart, count: "234 songs" },
    { name: "My Playlist #1", icon: ListMusic, count: "67 songs" },
    { name: "Chill Vibes", icon: ListMusic, count: "89 songs" },
    { name: "Workout Mix", icon: ListMusic, count: "45 songs" },
    { name: "Road Trip", icon: ListMusic, count: "123 songs" },
]

export default function MusicDashboard() {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [currentTime, setCurrentTime] = React.useState([30])
    const [volume, setVolume] = React.useState([75])

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Main Content */}
            <ScrollArea className="flex-1">
                <main className="p-6 space-y-8 bg-gradient-to-b from-gray-900 via-black to-black min-h-screen">
                    {/* Good Morning Section */}
                    <section className="space-y-4">
                        <h1 className="text-3xl font-bold">Good evening</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {playlists.slice(0, 6).map((playlist, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                                >
                                    <CardContent className="flex items-center gap-4 p-4">
                                        <div className="h-16 w-16 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                            <playlist.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-white">{playlist.name}</h3>
                                            <p className="text-sm text-gray-400">{playlist.count}</p>
                                        </div>
                                        <Button
                                            size="icon"
                                            className="bg-green-500 hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <Play className="h-4 w-4 text-black" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Recently Played */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Recently played</h2>
                            <Link to="/recently-played" className="text-gray-400 hover:text-white text-sm font-medium">
                                Show all
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {recentlyPlayed.map((track) => (
                                <Card
                                    key={track.id}
                                    className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                                >
                                    <CardContent className="p-4 space-y-3">
                                        <div className="relative">
                                            <img
                                                src={track.image || "/placeholder.svg"}
                                                alt={track.album}
                                                className="w-full aspect-square object-cover rounded-md"
                                            />
                                            <Button
                                                size="icon"
                                                className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                                            >
                                                <Play className="h-4 w-4 text-black" />
                                            </Button>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-white truncate">{track.title}</h3>
                                            <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Made for You */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Made for you</h2>
                            <Link to="/made-for-you" className="text-gray-400 hover:text-white text-sm font-medium">
                                Show all
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {madeForYou.map((playlist) => (
                                <Card
                                    key={playlist.id}
                                    className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                                >
                                    <CardContent className="p-4 space-y-3">
                                        <div className="relative">
                                            <img
                                                src={playlist.image || "/placeholder.svg"}
                                                alt={playlist.title}
                                                className="w-full aspect-square object-cover rounded-md"
                                            />
                                            <Button
                                                size="icon"
                                                className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                                            >
                                                <Play className="h-4 w-4 text-black" />
                                            </Button>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-white">{playlist.title}</h3>
                                            <p className="text-sm text-gray-400 line-clamp-2">{playlist.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Top Artists */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Your top artists</h2>
                            <Link to="/top-artists" className="text-gray-400 hover:text-white text-sm font-medium">
                                Show all
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {topArtists.map((artist) => (
                                <Card
                                    key={artist.id}
                                    className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                                >
                                    <CardContent className="p-4 space-y-3 text-center">
                                        <div className="relative">
                                            <img
                                                src={artist.image || "/placeholder.svg"}
                                                alt={artist.name}
                                                className="w-full aspect-square object-cover rounded-full mx-auto"
                                            />
                                            <Button
                                                size="icon"
                                                className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                                            >
                                                <Play className="h-4 w-4 text-black" />
                                            </Button>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-white">{artist.name}</h3>
                                            <p className="text-sm text-gray-400">Artist • {artist.followers} followers</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </main>
            </ScrollArea>

            {/* Music Player */}
            <div className="border-t border-gray-800 bg-gray-900 p-4">
                <div className="flex items-center justify-between">
                    {/* Current Track */}
                    <div className="flex items-center gap-4 flex-1">
                        <img src="/placeholder.svg?height=56&width=56" alt="Current track" className="h-14 w-14 rounded" />
                        <div>
                            <h4 className="font-semibold text-white">Blinding Lights</h4>
                            <p className="text-sm text-gray-400">The Weeknd</p>
                        </div>
                        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Player Controls */}
                    <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
                        <div className="flex items-center gap-4">
                            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                                <Shuffle className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                                <SkipBack className="h-4 w-4" />
                            </Button>
                            <Button
                                size="icon"
                                className="bg-white hover:bg-gray-200 text-black h-8 w-8"
                                onClick={() => setIsPlaying(!isPlaying)}
                            >
                                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </Button>
                            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                                <SkipForward className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                                <Repeat className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <span className="text-xs text-gray-400">1:23</span>
                            <Slider value={currentTime} onValueChange={setCurrentTime} max={100} step={1} className="flex-1" />
                            <span className="text-xs text-gray-400">3:20</span>
                        </div>
                    </div>

                    {/* Volume Controls */}
                    <div className="flex items-center gap-2 flex-1 justify-end">
                        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                            <Mic2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                            <Radio className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-2">
                            <Volume2 className="h-4 w-4 text-gray-400" />
                            <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-24" />
                        </div>
                        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
