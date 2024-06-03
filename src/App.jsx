import { Box } from '@chakra-ui/react';
import './App.css';

import ModelYComponent from "./Components/ModelYComponent/index.jsx";
import Model3Component from "./Components/Model3Component/index.jsx";
import ModelXComponent from "./Components/ModelXComponent/index.jsx";
import ModelSComponent from "./Components/ModelSComponent/index.jsx";
import CyberTruckComponent from "./Components/CyberTruckComponent/index.jsx";
import SolarPanels from "./Components/SolarPanels/index.jsx";
import SolarRoof from "./Components/SolarRoof/index.jsx";
import PowerWall from "./Components/PowerWall/index.jsx";


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
      <SolarPanels />
      <SolarRoof />
      <PowerWall />

    </Box>
  );
}

export default App;
