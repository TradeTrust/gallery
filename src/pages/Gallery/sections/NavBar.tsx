import React, { JSX } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/navigation-menu';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MenuIcon } from 'lucide-react';

const navItems = [
  { label: 'TradeTrust Website', href: 'https://www.tradetrust.io/' },
  { label: 'Verifier', href: 'https://v5-token-registry.tradetrust.io/' },
  { label: 'Creator', href: 'https://v5-token-registry.tradetrust.io/creator' },
];

export const NavBar = (): JSX.Element => {
  return (
    <Disclosure as="header" className="w-full z-5">
      {({ open }) => (
        <>
          <div className="relative flex h-[88px] max-w-screen-xl w-full mx-auto px-4 items-center justify-between">
            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <DisclosureButton
                className={`p-2 rounded-md border border-gray-300 text-gray-600 hover:text-black focus:outline-none ${
                  open ? 'bg-interactive-componentoverlayenabledbgneutralhovered' : 'bg-transparent'
                }`}
              >
                <MenuIcon className="h-6 w-6" />
              </DisclosureButton>
            </div>

            {/* Logo: center on mobile, left on desktop */}
            <div className="flex-1 flex justify-center md:justify-start">
              <img src="/tradetrust-logo.svg" alt="TradeTrust Logo" className="h-10 w-auto" draggable={false} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center space-x-2" aria-label="Primary Navigation">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-2">
                  {navItems.map(({ label, href }) => (
                    <NavigationMenuItem key={href}>
                      <NavigationMenuLink
                        className="nav-item inline-flex min-w-12 items-center justify-center p-3"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Mobile Navigation Panel */}
          <DisclosurePanel className="md:hidden absolute px-4 pb-4 max-w-screen-xl mx-auto">
            <div className="bg-white border border-white shadow-md rounded-2xl p-4 space-y-2 inline-block w-full">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="mobile-nav-item block rounded-md px-3 py-2 hover:bg-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
