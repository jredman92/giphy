import { useEffect, useState } from "react";
import CarouselStrap from "../CarouselStrap";
import CardStrap from "../../partials/CardStrap";
import { CardGroup, Nav } from "react-bootstrap";
import ToDo from "../ToDo";
import axios from "axios";

function HomePage() {
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

  const aboutPage = {
    title: "About Page",
    description: "Learn about this giphy application ",
    buttonText: "Learn About Us",
  };

  const searchPage = {
    title: "Search for Gifs",
    description: "Begin the search for your favorite gifs",
    buttonText: "Begin The Search",
  };
  const savedPage = {
    title: "View your saved Gifts",
    description: "All your favorite gifs under one roof",
  };

  return (
    <div>
      {/* Move all of this code to a HomePage Component */}
      <h1>Giphy App</h1>
      <div className="app">
        <div className="container">
          <div className="row">
            <CarouselStrap images={homeImages} />
          </div>
          <div className="row">
            <CardGroup>
              <CardStrap cardobject={aboutPage} />
              <CardStrap cardobject={searchPage} />
              <CardStrap cardobject={savedPage} />
            </CardGroup>
          </div>
          <div className="row">
            <ToDo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
