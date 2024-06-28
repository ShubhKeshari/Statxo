import { Box} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/Navbar";
import { DataTable} from "../components/Table";

const Dashboard = () => {
  return (
    <Box bg={"#f2f2f2"} height="100vh" >
        {/* <Navbar/> */}
        <DataTable/>
    </Box>
  );
};

export {Dashboard};
