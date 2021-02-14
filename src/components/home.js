import "./home.css";
import { Box } from "@material-ui/core";

import { useEffect, useState } from "react";

const Plants = () => {
  //   const plants = await fetch("http://localhost:8080/plant/arnoldii");
  //   console.log(plants);
  const [plants, setPlants] = useState([{}]);

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch(
        await fetch("http://localhost:8080/plant/arnoldii")
      );
      console.log(response);
    };
    fetchPlants();
  }, []);
  return <div id="plants"></div>;
};

const Home = () => {
  return (
    <Box id="background">
      HIHIHIHI
      <Plants />
    </Box>
  );
};

export default Home;
