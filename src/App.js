import "./App.css";
import Header from "./components/header/header.jsx";
import Sliders from "./components/sliders/sliders.jsx";
import Banner from "./components/banner/banner.jsx";
import Content from "./components/content/content.jsx";
import Map from "./components/map/map.jsx";
import Governor from "./components/governor/governor.jsx";
import Footer from "./components/footer/footer.jsx";
import "./components/banner/banner.css";
import "./components/content/content.css";
import "./components/map/map.css";
import "./components/governor/governor.css";
import "./components/footer/footer.css";
import "./components/sliders/sliders.css";
import "./components/header/header.css";
import "./@media/maxWidth_1000px.css";
import "./@media/maxWidth_800px.css";
import "./@media/maxWidth_670px.css";
import "./@media/maxWidth_550px.css";
import "./@media/maxWidth_510px.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <Banner />
      <Content />
      <Map />
      <Governor />
      <Footer />
    </div>
  );
}

export default App;
