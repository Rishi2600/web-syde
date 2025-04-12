'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button'; // Your magnetic button component
import { useState } from 'react';

export default function MobileDrawer({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-secondary text-primary z-40 p-6 flex flex-col justify-between"
        >
          {/* Navigation */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold tracking-wide text-accent mb-2">Menu</h2>
            <nav className="flex flex-col gap-4 text-lg font-medium">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggle}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Get in Touch + Theme Toggle */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-accent mb-2">Get in Touch</h2>
              <Button variant="solid">Let’s Talk</Button>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-accent mb-2">UI Theme</h2>
              <ThemeToggle />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

// Placeholder for ThemeToggle — replace with your theme logic
function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="px-4 py-2 rounded-2xl border border-accent text-accent hover:bg-accent hover:text-secondary transition-all duration-300"
    >
      Toggle {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
