import Button from "../UI/Button";

function Hero() {
  return (
    <section className="min-h-[50vw] bg-primary-color flex items-center justify-center pt-[10vw] md:pt-[5vw]">
      <div className="container flex flex-col md:flex-row items-center  ">
        <div className="grow flex flex-col gap-[3vw]">
          <div className="opacity-70">
            <h3 className="text-[3vw] md:text-[1.8vw] tracking-wide ">
              Let's solve hunger together with monthly Offer
            </h3>
            <h2 className="flex flex-col text-[9vw] md:text-[5.5vw] font-light uppercase  leading-tight">
              <span>Organic</span>
              <span>pasta & sauce</span>
            </h2>
          </div>
          <div>
            <Button href="/">SHOP NOW</Button>
          </div>
        </div>
        <div className="basi s-2/4 ">
          <img
            src="images/hero-image.png"
            alt="italian pasta image"
            className="w-[65vw] md:w-[40vw] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
