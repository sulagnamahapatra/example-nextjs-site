"use client";
import Image from "next/image";
import React, { useState, Suspense } from "react";
import { BorderBeam } from "../components/magicui/border-beam";
import AuroraBackgroundDemo from "./backg";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { GridShowcase, SpotlightCard, Footer, FooterProps, ThemeProvider, ThemeSwitchProps, Features, FeaturesProps, GridShowcaseProps } from '@lobehub/ui';
import { MoonStar, Palette, Zap } from 'lucide-react';
import SparklesText from "../components/magicui/sparkles-text";
import BlurFade from "../components/magicui/blur-fade";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";
import ShineBorder from "../components/magicui/shine-border";

const items: FeaturesProps['items'] = [
  {
    description:
      'Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.',
    icon: Palette,
    title: 'Themeable',
  },
  {
    description:
      'voids unnecessary styles props at runtime, making it more performant than other UI libraries.',
    icon: Zap,
    title: 'Fast',
  },
  {
    description:
      'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    icon: MoonStar,
    title: 'Light & Dark UI',
  },
];

export default function Home() {
  return (
    <Suspense fallback={<h1 style={{display: 'flex', justifyContent: 'center'}}>
    <SparklesText text="Getting there!" />
    </h1>}>
      <AuroraBackgroundDemo>
        <div className="relative w-full mb-4 flex items-center justify-center">
          <Navbar className="top-1" />
        </div>
        <div className="w-full">
          <GridShowcase className="w-full text-white">
            <SparklesText text="The Ultimate Development Studio" />
            <div style={{margin: '2em', textAlign: 'center'}}>
            <TextGenerateEffect words={"We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products."} />
            </div>
            <BlurFade key={`/hero-image.png`} delay={2} inView>
              <div className="fade-img">
                <img
                  className="mb-4 size-full rounded-lg object-contain bg-gradient-to-t from-back-400 to-transparent"
                  src={`/hero-image.png`}
                  alt={`Random image`}
                />
                <BorderBeam size={350} duration={12} delay={9} />
              </div>
            </BlurFade>
          </GridShowcase>
        </div>
        <div className="m-0 py-0 flex flex-col overflow-hidden bg-transparent">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-2xl font-semibold text-black dark:text-white">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Scroll Animations
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/linear.webp`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
        <ThemeProvider appearance="dark" themeMode="dark" defaultThemeMode="dark" style={{width: '100vw', display: 'flex', justifyContent: 'center', paddingBottom: '3rem'}}>
          <Features items={items} style={{paddingBottom: '5rem'}}/>
        </ThemeProvider>
        <ShineBorder
          className="h-fit w-fit bg-transparent pb-20 mb-40"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <TextRevealCard
            text="You know the business"
            revealText="I know the chemistry "
          >
            <TextRevealCardTitle>
              Sometimes, you just need to see it.
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              Hover over the card to reveal the hidden text ;)
            </TextRevealCardDescription>
          </TextRevealCard>
        </ShineBorder>
        <ThemeProvider appearance="dark" themeMode="dark" defaultThemeMode="dark" style={{width: '100vw'}}>
          <Footer bottom="Copyright © 2024" columns={[]} />
        </ThemeProvider>
      </AuroraBackgroundDemo>
    </Suspense>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("navbar", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
