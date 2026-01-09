"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, FolderKanban, Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderKanban },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-center gap-2 p-2 rounded-full glass shadow-xl shadow-black/5 dark:shadow-black/20 ring-1 ring-white/10 dark:ring-white/10 bg-white/80 dark:bg-[#0B1120]/90 backdrop-blur-xl"
      >
        {/* Brand/Logo - Collapsed on mobile, visible on desktop */}
        <Link
          href="/"
          className="hidden sm:flex items-center gap-2 px-3 py-2 mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <div className="p-1 rounded-md bg-gradient-to-tr from-primary to-cyan-500 text-white shadow-lg shadow-primary/20">
            <Sparkles size={14} className="fill-current" />
          </div>
          <span className="font-bold text-sm tracking-tight text-foreground/80 dark:text-foreground">MH</span>
        </Link>
        <div className="w-px h-6 bg-border mx-1 hidden sm:block"></div>

        {/* Links */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-full transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? "text-primary dark:text-blue-400" : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  }`}>
                  <Icon size={16} />
                  <span className="hidden sm:inline">{link.label}</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="w-px h-6 bg-border mx-1"></div>

        {/* Actions */}
        <div className="flex items-center gap-1 pl-1">
          <ThemeToggle />
          <a
            href="mailto:mdholloway@gmail.com"
            className="hidden sm:flex px-4 py-2 ml-1 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </motion.nav>
    </header >
  );
}
