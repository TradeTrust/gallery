import React, { JSX } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../../../../components/ui/navigation-menu';

export const NavBar = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: 'TradeTrust Website', href: '#' },
    { label: 'Verifier', href: '#' },
    { label: 'Creator', href: '#' },
  ];

  return (
    <header className="flex w-full justify-center z-[5]">
      <div className="flex h-[88px] w-full max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative h-10 w-[167px]">
            <img className="absolute w-[34px] h-10 top-0 left-0" alt="Group" src="/group-1.png" />
            <img className="absolute w-3.5 h-[19px] top-3.5 left-[33px]" alt="Vector" src="/vector-27.svg" />
            <img className="absolute w-2 h-3.5 top-[19px] left-12" alt="Vector" src="/vector-26.svg" />
            <img className="absolute w-3.5 h-[19px] top-3.5 left-[106px]" alt="Vector" src="/vector-27.svg" />
            <img className="absolute w-2 h-3.5 top-[19px] left-[121px]" alt="Vector" src="/vector-26.svg" />
            <img className="absolute w-[11px] h-3.5 top-[19px] left-[146px]" alt="Vector" src="/vector-36.svg" />
            <img className="absolute w-[9px] h-[18px] top-[15px] left-[158px]" alt="Vector" src="/vector-34.svg" />
            <img className="absolute w-3 h-[13px] top-[19px] left-[131px]" alt="Vector" src="/vector-29.svg" />
            <img className="absolute w-[15px] h-3.5 top-[19px] left-[57px]" alt="Vector" src="/vector-42.svg" />
            <img className="absolute w-[15px] h-[19px] top-3.5 left-[74px]" alt="Vector" src="/vector-37.svg" />
            <img className="absolute w-3.5 h-3.5 top-[19px] left-[91px]" alt="Vector" src="/vector-39.svg" />
          </div>
        </div>

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="inline-flex min-w-12 items-center justify-center p-3 rounded-xl font-headers-cards-section-header text-interactive-componenttransparentenabledcontentneutraldefault text-[length:var(--headers-cards-section-header-font-size)] tracking-[var(--headers-cards-section-header-letter-spacing)] leading-[var(--headers-cards-section-header-line-height)] hover:bg-interactive-componentoverlayenabledbgneutralhovered transition-colors"
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
