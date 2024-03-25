import Image from "next/image";
import React from "react";
import HeroImageText from "./hero-image-text";

const ImageGrallery = () => {
  return (
    <div className="image-grid-cnt tw-mt-7">
      <div className=" image-grid-larg-first ">
        <Image
          className="hero-image"
          src="/images/hero-image-1.png"
          alt="hero-image-1"
          objectFit="cover"
          fill
        />
        <HeroImageText />
      </div>
      <div className="image-grid-larg-last">
        <Image
          className="hero-image"
          src="/images/hero-image-2.png"
          alt="hero-image-2"
          objectFit="cover"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <HeroImageText />
      </div>
      <div className="image-grid-small">
        <Image
          className="hero-image"
          src="/images/hero-image-3.png"
          alt="hero-image-3"
          objectFit="cover"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <HeroImageText />
      </div>
      <div className="image-grid-small">
        <Image
          className="hero-image"
          src="/images/hero-image-4.png"
          alt="hero-image-4"
          objectFit="cover"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <HeroImageText />
      </div>
    </div>
  );
};

export default ImageGrallery;
