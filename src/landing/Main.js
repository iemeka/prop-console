import FromUs from "./from-us/FromUs";
import Banner from "./banner/Banner";
import "./Main.css";
import About from "./about/About";
import Package from "./package/Package";
import PeopleThink from "./people-think/PeopleThink";
import WatchDemo from "./watch-demo/WatchDemo";
import RequestDemo from "./request-demo/RequestDemo";
import Footer from "./footer/Footer";
import SlideMenu from "./slide-menu/SlideMenu";

export default function Main() {
  return (
    <div className="landing-wrap">
      <SlideMenu />
      <Banner />
      <FromUs />
      <About />
      <Package />
      <PeopleThink />
      <WatchDemo />
      <RequestDemo />
      <Footer />
    </div>
  );
}
