'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button'; // Your magnetic button component
import { useState } from 'react';
import DashedAnimatedLine from './DashedAnimatedLine';
// import { Switch } from './switch';

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
          initial={{ y: '100%' }}
          animate={{ y: "3%" }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 40 }}
          className="fixed top-0 right-0 h-full w-[100%] sm:w-[100%] bg-primary text-secondary z-40 p-6 flex flex-col flex-wrap justify-between text-4xl"
        >
          <div className='-mx-4'>
                          {/* Navigation */}
              <div className="px-4 text-4xl">
                <h2 className="text-2xl font-medium tracking-wide text-secondary mb-6 opacity-60">Menu</h2>
                <nav className="flex flex-col gap-12 mb-24 mt-12 font-medium  leading-8">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={toggle}
                      className="hover:text-accent transition-colors text-6xl duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Get in Touch + Theme Toggle */}
              <div className="px-4">
                <div>
                  <h2 className="text-lg font-semibold opacity-60 text-secondary mb-7">Get in Touch</h2>
                  <div className='text-center mb-8 mt-16 -ml-8 flex font-medium leading-normal text-5xl tracking-tight text-secondary'>
                      <Link href={"/services/#development"}
                        className="leading-snug mb-8 px-8 text-secondary no-underline duration-500 group">Contact Us
                                <DashedAnimatedLine />
                      </Link>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold opacity-60 text-secondary mb-7">UI Theme</h2>
                      {/* <Switch /> */}
                </div>


    {/* TODO: Change this  */}
                {/* <div>
                  <h2 className="text-lg font-semibold text-accent mb-2">UI Theme</h2>
                  <ThemeToggle />
                </div> */}

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
