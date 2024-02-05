import { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../button/Button";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  return (
    <header className="text-center px-12 md:px-0  grid md:grid-cols-12 gap-8 pb-14 md:pb-20">
      <img
        src="/mainLanding.png"
        alt="logo"
        className="w-full order-first md:order-last mx-auto md:col-span-4 "
      />
      <div className="order-last md:order-first md:col-span-8 grid">
        <h1 className="pt-10 font-sans text-2xl text-gray-900 font-bold md:text-left	md:text-[56px] leading-[148%]">
          {props.title}
        </h1>
        <div className="pt-3 md:pt-4 font-lato text-base  mb-8 leading-normal md:text-left	md:text-[24px]	">
          {props.description}
        </div>
        <div className="text-center md:text-left flex">
          <Link href="https://app.playard.id" target="_blank">
            <Button> Daftar Sekarang</Button>
          </Link>
          <Link
            href="https://apps.apple.com/sg/app/playard/id6468848615
          "
          >
            <img
              className="apple ml-4"
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
              alt="Download on the App Store"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { HeroOneButton };
