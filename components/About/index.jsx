function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-primary-color flex items-center justify-center"
    >
      <div className="container flex flex-col items-center justify-center gap-8">
        <h3 className="uppercase border-b-4 border-secondary-color text-[2rem] font-semibold">
          About us
        </h3>
        <div className="w-4/5 text-[1.5rem] flex flex-col gap-4">
          <p>
            Embark on a gastronomic adventure through the heart of Italy with
            our meticulously crafted Next.js website dedicated to the exquisite
            world of Italian cuisine. From the rolling hills of Tuscany to the
            bustling streets of Naples, our platform is a treasure trove of
            authentic recipes, culinary insights, and captivating stories that
            celebrate the rich tapestry of Italian gastronomy.
          </p>
          <p>
            Indulge your senses as you explore a diverse array of mouthwatering
            dishes, each lovingly prepared using time-honored techniques and the
            finest ingredients sourced from Italy's bountiful landscapes.
            Whether you're a seasoned chef seeking inspiration or an avid food
            enthusiast eager to expand your culinary horizons, our Next.js
            project provides an immersive and user-friendly experience that
            caters to your every need.
          </p>
          <p>
            With a sleek and intuitive interface, seamless navigation, and
            lightning-fast performance powered by Next.js, discovering the joys
            of Italian cooking has never been easier. Join us on a culinary
            journey like no other, where every click transports you to a world
            of flavor, tradition, and passion. Buon appetito!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
