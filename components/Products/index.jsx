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

  console.log(data);

  return (
    <section id="products" className="min-h-screen">
      <div className="bg-primary-gray">
        <div className="container flex justify-between items-center py-16  uppercase">
          <div className="flex items-center gap-2">
            <span className="block bg-secondary-color w-[4px] h-6 "></span>
            <span className="text-[1.8rem] font-medium">Featured Products</span>
          </div>
          <div>
            <Button href="/">Show All Items</Button>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap justify-between gap-y-12 py-12">
        <ItemCard item={data[0]} />
        <ItemCard item={data[1]} />
        <ItemCard item={data[2]} />
        <ItemCard item={data[3]} />
        <ItemCard item={data[4]} />
        <ItemCard item={data[5]} />
        <ItemCard item={data[6]} />
        <ItemCard item={data[7]} />
        <ItemCard item={data[8]} />
      </div>
    </section>
  );
}

export default Products;
