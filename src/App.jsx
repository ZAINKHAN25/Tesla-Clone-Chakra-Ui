import { Box } from '@chakra-ui/react';
import './App.css';

import ModelYComponent from "./Components/ModelYComponent/index.jsx";
import Model3Component from "./Components/Model3Component/index.jsx";
import ModelXComponent from "./Components/ModelXComponent/index.jsx";
import ModelSComponent from "./Components/ModelSComponent/index.jsx";
import CyberTruckComponent from "./Components/CyberTruckComponent/index.jsx";
import SolarPanelsComponent from "./Components/SolarPanelsComponent/index.jsx";
import SolarRoofComponent from "./Components/SolarRoofComponent/index.jsx";
import PowerWallComponent from "./Components/PowerWallComponent/index.jsx";
import AccessoriesComponent from "./Components/AccessoriesComponent/index.jsx";
import FooterComponent from "./Components/FooterComponent/index.jsx";


function App() {
  return (
    <Box
      maxW={"100vw"}
      minH={"100vh"}
      overflowX={"hidden"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >

      <ModelYComponent />
      <Model3Component />
      <ModelXComponent />
      <ModelSComponent />
      <CyberTruckComponent />
      <SolarPanelsComponent />
      <SolarRoofComponent />
      <PowerWallComponent />
      <AccessoriesComponent />
      <FooterComponent />

    </Box>
  );
}

export default App;
