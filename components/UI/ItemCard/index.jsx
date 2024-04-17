function ItemCard({ item }) {
  console.log(item);
  return (
    <article className=" w-[22rem]">
      <div className="w-full ">
        <img
          src={`${item.image_url}`}
          alt={`${item.title}`}
          className="aspect-squar aspect-aut aspect-vid aspect-[16/12] object-cover"
        />
      </div>
      <div>
        <p className="text-[1.5rem] font-medium">{item.title}</p>
      </div>
    </article>
  );
}

export default ItemCard;
