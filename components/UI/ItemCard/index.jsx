function ItemCard({ item }) {
  function randomPrice() {
    return (Math.random() * 100).toFixed(2);
  }
  return (
    <article className="w-[30vw] sm:w-[25vw] md:w-[20vw]">
      <div className="w-full ">
        <img
          src={`${item.image_url}`}
          alt={`${item.title}`}
          className="aspect-[16/13] object-cover"
        />
      </div>
      <div className="my-4">
        <p className="text-[1.8vw] md:text-[1.2vw] font-medium">{item.title}</p>
        <p className="text-[1.5vw] md:text-[1vw] font-medium text-secondary-color ">
          {" "}
          $ {randomPrice()}
        </p>
      </div>
    </article>
  );
}

export default ItemCard;
