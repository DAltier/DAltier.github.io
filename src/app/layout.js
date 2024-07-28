import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import StarsBackground from '@/components/StarsBackground';
import Sound from '@/components/Sound';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: {
    template: 'Dana Altier',
    default: 'Dana Altier',
  },
  description:
    'Portfolio created by Dana Altier using Next.js, Tailwind CSS, Three.js, and Framer Motion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          'bg-background text-foreground font-inter'
        )}
      >
        {children}
        <StarsBackground />
        {/* <Sound /> */}
        <div id="my-modal" />
      </body>
    </html>
  );
}
