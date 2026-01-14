"use client";

import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarTrigger, SidebarRail } from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LayoutDashboard, FileSpreadsheet, FileText, LogOut, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/supervisor" },
    { title: "Listados CSV", icon: FileSpreadsheet, href: "/supervisor/csv-list" },
    { title: "Extractor PDF", icon: FileText, href: "/supervisor/pdf-extractor" },
];

/**
 * Supervisor Layout with Notion-style Sidebar and Dark Mode Toggle
 */
export default function SupervisorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<{ username: string; role: string } | null>(null);

    useEffect(() => {
        // Check auth
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/login");
            return;
        }
        setUser(JSON.parse(storedUser));
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
    };

    if (!user) return null;

    return (
        <SidebarProvider>
            <div className="h-screen flex w-full overflow-hidden">
                <Sidebar collapsible="icon" className="border-r shrink-0">
                    <SidebarHeader className="p-4 group-data-[collapsible=icon]:p-2">
                        <div className="flex items-center justify-between group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2">
                            <div className="relative w-full flex justify-center group-data-[collapsible=icon]:hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/flowserve-logo.png"
                                    alt="Flowserve Logo"
                                    className="w-50 h-18 object-cover object-center"
                                />
                            </div>
                            <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center w-full pt-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/flowserve-icon.png"
                                    alt="Flowserve Icon"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                        </div>
                    </SidebarHeader>

                    <SidebarContent className="px-2">
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.href}
                                        className="w-full justify-start"
                                    >
                                        <Link href={item.href} className="flex items-center gap-3">
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>

                    <SidebarFooter className="p-4">
                        {/* Powered by HEXA Ingenieros */}
                        <div className="flex flex-row items-end gap-2 opacity-60 hover:opacity-100 transition-opacity select-none group mb-4 w-full pl-1 group-data-[collapsible=icon]:hidden">
                            <span
                                className="text-[16px] text-muted-foreground font-normal mb-1.5"
                                style={{ fontFamily: 'var(--font-dancing-script), cursive' }}
                            >
                                Powered by
                            </span>
                            <div className="flex flex-col items-start leading-none">
                                <span
                                    className="text-3xl font-bold tracking-widest text-foreground"
                                    style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                                >
                                    HEXA
                                </span>
                                <span className="text-[9px] text-primary font-semibold uppercase tracking-[0.2em] -mt-1 ml-0.5 group-hover:text-primary/80 transition-colors">
                                    Ingenieros
                                </span>
                            </div>
                        </div>

                        <Separator className="mb-4 group-data-[collapsible=icon]:mb-2" />
                        <div className="flex items-center gap-3 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2">
                            <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                    {user.username.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                                <p className="text-sm font-medium truncate">{user.username}</p>
                                <p className="text-xs text-muted-foreground">{user.role}</p>
                            </div>
                            <ThemeToggle />
                            <button
                                onClick={handleLogout}
                                className="p-2 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-950 dark:hover:text-red-400 rounded-md transition-colors"
                                title="Cerrar sesión"
                            >
                                <LogOut className="w-4 h-4" />
                            </button>
                        </div>
                    </SidebarFooter>
                    <SidebarRail />
                </Sidebar>

                <main className="flex-1 flex flex-col min-h-0 min-w-0 bg-background">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}
