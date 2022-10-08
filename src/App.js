import Header from "components/Header";
import Campaigns from "components/Campaigns";
import Categories from "components/Categories";
import Card from "components/Card";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
import {useWindowWidth} from '@react-hook/window-size'
function App() {
  const windowWidth = useWindowWidth()
  return (
    <>
      <Header/>
      {windowWidth <= 768 && <Campaigns/>}
      <HeroSection/>
      <Categories/>
      {windowWidth >= 768  && <Campaigns/> }
      <div className="container mx-auto grid gap-y-6 md:pt-8">
      <Favorites/>
      <MobileApp/>
      <Card/>
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
