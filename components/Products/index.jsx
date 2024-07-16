import Button from "../UI/Button";
import ItemCard from "../UI/ItemCard";

("bd2db9a0-7ad9-4487-8a5f-747f56026c3d");

async function getData() {
  const data = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta&key=bd2db9a0-7ad9-4487-8a5f-747f56026c3d`
  );

  const response = await data.json();

  return response.data.recipes;
}

async function Products() {
  const data = await getData();

  // console.log(data);

  return (
    <section id="products" className="">
      <div className="bg-primary-gray">
        <div className="container flex justify-between items-center py-[3vw]  uppercase">
          <div className="flex items-center gap-[.4vw] text-[2.6vw] md:text-[1.6vw]">
            <span className="block bg-secondary-color text-secondary-color w-[.35vw] md:w-[0.2vw] my-0 overflow-hidden ">
              l
            </span>
            <span className="font-medium">Featured Products</span>
          </div>
          <div>
            <Button href="/">
              {" "}
              <span className="hidden md:inline-block">Show</span> All Items
            </Button>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap justify-center gap-[4vw] md:gap-0 sm:justify-between  gap-y-[2.6vw] py-[5vw]">
        <ItemCard item={data[0]} />
        <ItemCard item={data[1]} />
        <ItemCard item={data[2]} />
        <ItemCard item={data[3]} />
        <ItemCard item={data[8]} />
        <ItemCard item={data[11]} />
        <ItemCard item={data[6]} />
        <ItemCard item={data[7]} />
        <article className="hidden sm:inline-block md:hidden w-[25vw]"></article>
      </div>
    </section>
  );
}

export default Products;
