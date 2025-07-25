"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeModeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BellDot, MenuIcon } from "lucide-react";
import { navLinks } from "./data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="p-5 flex items-center justify-between relative z-10 border-b bg-background max-w-screen">
      <div>
        <Link href="/" className="text-2xl font-bold text-primary">
          Abcde
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center flex-1 justify-center">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navLinks.map((nav) => (
              <NavigationMenuItem key={nav.label}>
                <NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 w-[320px]">
                    {nav.items.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 rounded hover:bg-muted transition"
                          >
                            <div className="text-sm font-medium">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="gap-3 flex items-center">
        <ThemeModeToggle />
        <Button variant="outline" size="icon" className="rounded-full">
          <BellDot />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hidden md:flex"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shinjith-dev.png" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 m-3" align="start">
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              {navLinks.map((nl) => (
                <React.Fragment key={`mobile-${nl.label}`}>
                  <DropdownMenuLabel>{nl.label}</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    {nl.items.map((nli) => (
                      <DropdownMenuItem key={nli.title} asChild>
                        <Link href={nli.href}>{nli.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </React.Fragment>
              ))}
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
