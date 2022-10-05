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
      <Favorites/>
      <MobileApp/>
      <Card/>
      <Footer/>
      
    </>
  );
}

export default App;
