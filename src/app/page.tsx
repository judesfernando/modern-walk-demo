import Categories from "./components/Categories/Categories";
import FlashSale from "./components/FlashSale/FlashSale";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <FlashSale></FlashSale>
      <Categories></Categories>
    </div>
  );
}
