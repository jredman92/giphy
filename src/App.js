import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CarouselStrap from "./components/CarouselStrap";

function App() {
  const apiKey = "yYpIWOaoTUEBYsCbi8cCQy76FSqz6FdL";
  const [homeImages, setHomeImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`
    );
    setHomeImages(res.data.data);
  }

  return (
    <div className="App">
      <h1>Giphy App</h1>
      <div className="app"></div>
      <div className="container">
        <CarouselStrap images={homeImages} />
      </div>
    </div>
  );
}

export default App;
