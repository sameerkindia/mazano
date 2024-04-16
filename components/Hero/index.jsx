import Button from "../UI/Button";

function Hero() {
  return (
    <section className="min-h-screen bg-primary-color flex items-center justify-center">
      <div className="container flex items-center  ">
        <div className="grow opacity-70 flex flex-col gap-16">
          <div>
            <h3 className="text-[1.9rem] tracking-wide ">
              Let's solve hunger together with monthly Offer
            </h3>
            <h2 className="flex flex-col text-[5.2rem] font-light uppercase">
              <span>Organic</span>
              <span className="-my-[2rem]">pasta & sauce</span>
            </h2>
          </div>
          <div>
            <Button href="/">SHOP NOW</Button>
          </div>
        </div>
        <div className="basis-2/4">
          <img
            src="images/hero-image.png"
            alt="italian pasta image"
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
