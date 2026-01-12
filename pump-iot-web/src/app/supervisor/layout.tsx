"use client";

import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutDashboard, FileSpreadsheet, FileText, LogOut } from "lucide-react";
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
                <Sidebar className="border-r shrink-0">
                    <SidebarHeader className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-primary-foreground"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-semibold text-sm">Pump IoT</h2>
                                <p className="text-xs text-muted-foreground">Flowserve</p>
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
                                        <a href={item.href} className="flex items-center gap-3">
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>

                    <SidebarFooter className="p-4">
                        <Separator className="mb-4" />
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-muted-foreground">Tema</span>
                            <ThemeToggle />
                        </div>
                        <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                    {user.username.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{user.username}</p>
                                <p className="text-xs text-muted-foreground">{user.role}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 hover:bg-accent rounded-md transition-colors"
                                title="Cerrar sesión"
                            >
                                <LogOut className="w-4 h-4 text-muted-foreground" />
                            </button>
                        </div>
                    </SidebarFooter>
                </Sidebar>

                <main className="flex-1 flex flex-col min-h-0 min-w-0 bg-background">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}
