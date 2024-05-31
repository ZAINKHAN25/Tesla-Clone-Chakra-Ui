import { Box } from '@chakra-ui/react';
import './App.css';

import ModelYComponent from "./Components/ModelYComponent/index.jsx";
import Model3Component from "./Components/Model3Component/index.jsx";


function App() {
  return (
    <Box maxW={"100vw"} minH={"100vh"} overflowX={"hidden"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>

      
      <ModelYComponent />
      <Model3Component />
    </Box>
  );
}

export default App;
