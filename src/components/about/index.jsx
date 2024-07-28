/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ItemLayout from './ItemLayout';
import Link from 'next/link';
import Image from 'next/image';
import bg from '../../../public/images/headshot.jpg';

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            ' col-span-full lg:col-span-10 row-span-3 flex-col items-start'
          }
        >
          <p className="font-light text-xs sm:text-sm md:text-base ">
            Hi! I&apos;m Dana, a Full Stack Software Engineer with over 3 years
            of experience in AI-driven web development, who is passionate about
            clean and easily maintainable code. I fell in love with programming
            in high school and have used a variety of languages and frameworks
            along the way.
            <br />
            <br />
            After earning my BS in Software Development, I opted to further
            enhance my coding skills, so I enrolled in an intensive, full-time
            bootcamp. I accumulated over 1000 hours of experience in full-stack
            web development as well as data structures and algorithms, while
            building more than 50 web applications. I achieved a black belt in
            all three stacks, the highest honor possible for a perfect score on
            the final exam.
            <br />
            <br />
            My interests are diverse, spanning from coding to reading,
            photography, cooking/baking, gaming, and travel.
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            ' col-span-full row-span-3 xs:col-span-4 lg:col-span-2 text-accent'
          }
        >
          <Image
            priority
            // sizes="100vw"
            src={bg}
            alt="background-image"
            fill
            // className="-z-50 w-full h-full object-cover object-center opacity-50"
          />
        </ItemLayout>

        {/* <ItemLayout
          className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-3xl">
            9+ years in healthcare
          </p>
        </ItemLayout> */}

        <ItemLayout
          className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=daltier&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Dana Altier"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=daltier&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Dana Altier"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={'col-span-full'}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,azure,bootstrap,cloudflare,css,discord,django,docker,dynamodb,express,figma,firebase,flask,git,github,graphql,html,java,js,jquery,kafka,kubernetes,materialui,mongodb,mysql,nextjs,nodejs,npm,postgres,postman,py,react,redux,sass,styledcomponents,tailwind,threejs,ts,vscode,yarn`}
            alt="Dana Altier"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=daltier&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Dana Altier"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
          <Link
            href="https://github.com/daltier/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=daltier&repo=LandingPage&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Dana Altier"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
