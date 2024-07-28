import Image from 'next/image';
import bg from '../../../../public/background/about-background.jpeg';
import RenderModel from '@/components/RenderModel';
import AboutDetails from '@/components/about';
import dynamic from 'next/dynamic';

const PlanetModel = dynamic(() => import('@/components/models/PlanetModel'), {
  ssr: false,
});

export const metadata = {
  title: 'About',
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Dana Altier Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[40%] -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <PlanetModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-3xl xs:text-3xl sm:text-8xl  lg:text-9xl text-accent">
            Dana Altier
          </h1>
          <p className="font-light text-foreground lg:text-xl xs:text-md">
            Join me on a journey through the vast array of tools and
            technologies that bring applications to life.
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
