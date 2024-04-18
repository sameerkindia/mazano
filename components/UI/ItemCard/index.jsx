function ItemCard({ item }) {
  function randomPrice() {
    return (Math.random() * 100).toFixed(2);
  }
  return (
    <article className="w-[22rem]">
      <div className="w-full ">
        <img
          src={`${item.image_url}`}
          alt={`${item.title}`}
          className="aspect-[16/13] object-cover"
        />
      </div>
      <div className="my-4">
        <p className="text-[1.4rem] font-medium">{item.title}</p>
        <p className="text-[1.2rem] font-medium text-secondary-color ">
          {" "}
          $ {randomPrice()}
        </p>
      </div>
    </article>
  );
}

export default ItemCard;
