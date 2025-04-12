'use client';

import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks({ className = '' }: { className?: string }) {
  return (
    <nav className={`flex gap-6 items-center ${className}`}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-base font-medium text-secondary hover:text-accent transition-colors duration-300"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
