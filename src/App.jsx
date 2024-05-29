import { Box } from '@chakra-ui/react';
import './App.css';

import Navbar from "./Components/Navbar/index.jsx"

function App() {
  return (
    <Box width={"100vw"} minH={"100vh"}>
      <Navbar />
    </Box>
  );
}

export default App;
