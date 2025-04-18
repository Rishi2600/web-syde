"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import Hamburger from "./ui/Hamburger";
import MobileDrawer from "./ui/MobileDrawer";
// import Logo from "./Logo";
// import Button from "./Button";
// import Hamburger from "./Hamburger";
// import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Design Projects", href: "/design-projects" },
    { name: "About", href: "/about" },
    { name: "How we work", href: "/how-we-work" },
    { name: "Blog", href: "/blog" },
  ];

    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? "bg-primary/50 backdrop-blur-md border-b border-secondary border-opacity-30" : "bg-primary"
    } px-6 py-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
                className="text-base font-medium text-primary dark:text-white hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="solid" className="ml-4">
            Get in Touch
          </Button>

        </nav>

{/* TODO: TOMM TASK:  */}
        {/* Mobile Menu */}
        <div className="md:hidden flex">
          <div className="mr-12">
          <Button>Get In Touch</Button>
          </div>
          <Hamburger isOpen={drawerOpen} toggle={toggleDrawer} />
        </div>

        {/* Drawer */}
        <MobileDrawer isOpen={drawerOpen} toggle={toggleDrawer} />
      </div>
      
    </header>
  );
}
