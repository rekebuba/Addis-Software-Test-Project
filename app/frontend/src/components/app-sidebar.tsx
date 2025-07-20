"use client";

import {
    Home,
    Search,
    Library,
    Plus,
    Music,
    ListMusic,
} from "lucide-react"
import { Link } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarRail,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useState, useEffect } from "react";
import { NavMain } from "@/components/nav-main"
import { NavSidebar } from "@/components/nav-sidebar"
import { NavUser } from "@/components/nav-user"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuth } from "@/context/auth-context";
import FadeIn from "@/components/fade-in";
import { type UserProfile } from "@/lib/api-response-validation";
import { userApi } from "@/api/user-api";
import { toast } from "sonner";

const data = {
    user: {
        system: [
            { title: "Home", icon: Home, href: "/dashboard" },
            { title: "Search", icon: Search, href: "/dashboard/search" },
            { title: "Your Library", icon: Library, href: "/dashboard/library" },
        ],
        navMain: [
            {
                title: "Playlists",
                icon: Plus,
                href: "#",
                items: [
                    { title: "Create Playlist", href: "/dashboard/playlist/create" },
                    { title: "Liked Songs", href: "/dashboard/playlist/liked" },
                    { title: "Downloaded", href: "/dashboard/playlist/downloaded" },
                ],
            },
            {
                title: "Recently Created",
                icon: ListMusic,
                href: "#",
                items: [
                    { title: "Liked Songs", href: "/dashboard/recent/liked" },
                    { title: "My Playlist #1", href: "/dashboard/recent/playlist1" },
                    { title: "Chill Vibes", href: "/dashboard/recent/chill" },
                    { title: "Workout Mix", href: "/dashboard/recent/workout" },
                    { title: "Road Trip", href: "/dashboard/recent/roadtrip" },
                ],
            },
        ],
    }
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ ...props }: AppSidebarProps) {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const { userRole } = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {

            const response = await userApi.getDashboardData();
            if (!response.success) {
                toast.error(response.error.message, {
                    style: { color: "red" },
                });
                return;
            }
            setUserData(response.data);
        };

        fetchUserData();
    }, []);

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="flex h-14 items-center border-b px-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Link to={`/${userRole}/dashboard`} className="flex items-center gap-2 font-semibold">
                                <Music className="h-8 w-8 text-green-500" />
                                <span className="text-xl font-bold text-sky-500">SoundWave</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <FadeIn isLoading={!userRole} loader={<SidebarSkeleton {...props} />}>
                    {userRole && (
                        <>
                            <NavMain items={data[userRole].navMain} />
                            <NavSidebar items={data[userRole].system} />
                        </>
                    )}
                </FadeIn>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                <FadeIn isLoading={!userData} loader={<SidebarSkeleton {...props} />}>
                    {userData && <NavUser user={userData} />}
                </FadeIn>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

function SidebarSkeleton({ ...props }) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="flex h-14 items-center border-b px-4">
                <Skeleton className="h-8 w-32" />
            </SidebarHeader>
            <SidebarContent>
                <div className="space-y-4 p-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                </div>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[100px]" />
                        <Skeleton className="h-4 w-[70px]" />
                    </div>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
