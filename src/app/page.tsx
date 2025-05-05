import CarBrand from "@/components/CarBrand";
import CarType from "@/components/CarType";
import DealerSearch from "@/components/DealerSearch";
import FAQList from "@/components/FAQList";
import Hero from "@/components/Hero";
import MoveToTop from "@/components/Movetotop";
import NewestCar from "@/components/NewestCar";
import PurchaseSteps from "@/components/PurchaseSteps";
import Review from "@/components/Review";
import Searchbar from "@/components/Searchbar";


export default function Home() {
  return (
    <>
      <Hero />
      <CarBrand />
      <CarType />
      <Searchbar />
      <NewestCar />
      <PurchaseSteps />
      <Review />
      <FAQList />
      <DealerSearch />
      <MoveToTop />
    </>
  );
}
