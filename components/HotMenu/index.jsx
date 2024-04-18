import Button from "../UI/Button";

function HotMenu() {
  return (
    <section className="bg-hotMenu bg-cover bg-center min-h-[60vh] flex items-center">
      <div className="container   py-28 h-full">
        <div className="mx-auto my-auto bg-white py-16 px-8 w-2/4 flex flex-col items-center justify-end gap-8">
          <p className="border-b-4 border-secondary-color text-[1.5rem] font-semibold">
            HOT MENU
          </p>
          <h4 className="text-[1.3rem]">
            Pasta Salad with Melon, Pancetta, and Ricotta Salata
          </h4>
          {/* 5ed6604591c37cdc054bcd71 */}
          <Button href="/">Order now</Button>
        </div>
      </div>
    </section>
  );
}

export default HotMenu;
