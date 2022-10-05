import Header from "components/Header";
import Campaigns from "components/Campaigns";
import Categories from "components/Categories";
import Card from "components/Card";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campaigns/> 
      <div className="container mx-auto grid gap-y-6">
      <Favorites/>
      <MobileApp/>
      <Card/>
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
