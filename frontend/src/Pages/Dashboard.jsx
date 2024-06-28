import { Box} from "@chakra-ui/react";
import React from "react";
import { DataTable} from "../components/Table";

const Dashboard = () => {
  return (
    <Box bg={"#f2f2f2"} height="100vh" >
        <DataTable/>
    </Box>
  );
};

export {Dashboard};
