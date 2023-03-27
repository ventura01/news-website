import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="container px-3 md:px-0 md:mx-auto mb-12 md:mb-16 grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-3"
    >
      <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-3">
        <Image
          src="/images/image-web-3-desktop.jpg"
          height={800}
          width={300}
          alt="hero-img-dt"
          className="hidden w-full object-cover object-center md:flex"
        />
        <Image
          src="/images/image-web-3-mobile.jpg"
          height={300}
          width={175}
          alt="hero-img-mb"
          className="flex w-full object-cover object-center md:hidden"
        />
      </div>
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
        <h1 className="text-4xl md:text-6xl font-bold">The Bright Future of Web 3.0?</h1>
      </div>
      <div className="col-start-1 col-end-2 row-start-5 row-end-6 flex flex-col md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
        <p className="mb-8 text-darkGrayishBlue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-veryDarkBlue py-3 px-5 uppercase tracking-wider text-white hover:bg-softRed">
          read more
        </button>
      </div>
      <aside className="col-start-1 col-end-2 row-start-7 row-end-9 bg-veryDarkBlue px-10 py-12 text-white md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 ">
        <h2 className="mb-6 text-2xl font-bold uppercase text-softOrange">
          news
        </h2>
        <div className="mb-4 border-b border-offWhite">
          <h3 className="mb-1 cursor-pointer text-lg font-bold hover:text-softOrange">
            Hydrogen VS Electric Cars
          </h3>
          <p className="mb-4 text-grayishBlue">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="mb-4 border-b border-offWhite">
          <h3 className="mb-1 cursor-pointer text-lg font-bold hover:text-softOrange">
            The Downsides of AI Artistry
          </h3>
          <p className="mb-4 text-grayishBlue">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div>
          <h3 className="mb-1 cursor-pointer text-lg font-bold hover:text-softOrange">
            Is VC Funding Drying Up?
          </h3>
          <p className="mb-4 text-grayishBlue">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default HeroSection;
