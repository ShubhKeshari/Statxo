import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Select,
  useToast,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../../util/vars"
const DataTable = () => {
  const [tableData, setTableData] = useState([]);
  const toast = useToast();
  const { auth, setAuth } = useContext(AuthContext);
  const fetchData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/tasks/task`);
      const data = await res.json();
      console.log(data);
      setTableData(data.data);
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const updateData = async (id, newData) => {
    try {
      const res = await fetch(`${BASE_URL}/tasks/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
        body: JSON.stringify(newData),
      });

      if (!res.ok) {
        const errorMessage = await res.json();
        throw new Error(errorMessage.message || "Failed to update data");
      }

      const updatedData = await res.json();
      toast({
        title: `${updatedData.message}`,
        status: "success",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      fetchData();
      return updatedData;
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      throw error;
    }
  };
  useEffect(() => {
    fetchData();
    if (localStorage.getItem("email")) {
      setAuth({
        isAuth: "true",
        email: localStorage.getItem("email"),
        userId: localStorage.getItem("userId"),
        accessToken: localStorage.getItem("accessToken"),
      });
    }
  }, []);

  const handleActionType = (item, value) => {
    const newData = { ...item, ActionType: value };
    updateData(newData._id, newData);
  };
  const handleActionName = (item, value) => {
    const newData = { ...item, ActionName: value };
    updateData(newData._id, newData);
  };
  return (
    <Box mt={16} overflow={"auto"} width="100%" p={4}>
      <Table variant="striped" colorScheme="teal">
        <Thead bg="yellow.300">
          <Tr>
            <Th>Quantity</Th>
            <Th>Amount</Th>
            <Th>Posting Year</Th>
            <Th>Posting Month</Th>
            <Th>Action Type</Th>
            <Th>Action Number</Th>
            <Th>Action Name</Th>
            <Th>Status</Th>
            <Th>User Name (Edited by)</Th>
            <Th>User Name (Edited when)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((item, index) => (
            <Tr key={index}>
              <Td>{item.Quantity}</Td>
              <Td>{item.Amount}</Td>
              <Td>{item.PostingYear}</Td>
              <Td>{item.PostingMonth}</Td>
              <Td>
                <Select
                  value={item.ActionType}
                  onChange={(e) => handleActionType(item, e.target.value)}
                >
                  <option value="Price-Negotiation">Price Negotiation</option>
                  <option value="Scrap">Scrap</option>
                  <option value="Product ERP">Product ERP</option>
                  <option value="Price Non ERP">Price Non ERP</option>
                </Select>
              </Td>
              <Td>{item.ActionNumber}</Td>
              <Td>
                <Select
                  value={item.ActionName}
                  onChange={(e) => handleActionName(item, e.target.value)}
                >
                  <option value="Rebate">Rebate</option>
                  <option value="Price Increase">Price Increase</option>
                  <option value="Additional Task">Additional Task</option>
                  <option value="Price Decrease">Price Decrease</option>
                </Select>
              </Td>
              <Td>{item.Status}</Td>
              <Td>{item.UserName}</Td>
              <Td>{item.EditedAt}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export { DataTable };
