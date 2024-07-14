import Button from "../UI/Button";

function HotMenu() {
  return (
    <section className="bg-hotMenu bg-cover bg-center min-h-[20vw] flex items-center">
      <div className="container   py-[6.6vw] h-full">
        <div className="mx-auto my-auto bg-white py-[3vw] px-[1.6vw] w-2/4 flex flex-col items-center justify-end gap-8">
          <p className="border-b-4 border-secondary-color text-[1.2vw] font-semibold">
            HOT MENU
          </p>
          <h4 className="text-[1.2vw]">
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
