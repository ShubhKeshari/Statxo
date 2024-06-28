import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Select,
} from "@chakra-ui/react";
const DataTable = () => {
  const initialData = [
    {
      quantity: 1,
      amount: 312.35,
      postingYear: 2020,
      postingMonth: 1,
      actionType: "option1",
      actionNumber: 123456,
      actionName: "Action 1",
      status: "In Progress",
      editedBy: "User1",
      editedWhen: "2023-01-01",
    },
    {
      quantity: 1,
      amount: 889.0,
      postingYear: 2020,
      postingMonth: 2,
      actionType: "option2",
      actionNumber: 123457,
      actionName: "Action 2",
      status: "In Progress",
      editedBy: "User2",
      editedWhen: "2023-01-02",
    },
  ];
  const [data, setData] = useState(initialData);
  const handleSelectChange = (index, value) => {
    const newData = [...data];
    newData[index].actionType = value;
    setData(newData);
  };
  return (
    <Box maxHeight="calc(100vh-64px)" overflow={"auto"} width="100%" p={4}>
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
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>1</Td>
              <Td>{(Math.random() * 1000).toFixed(2)}</Td>
              <Td>2020</Td>
              <Td>{Math.ceil(Math.random() * 12)}</Td>
              <Td>
                <Select
                  value={item.actionType}
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                >
                  <option value="option1">Price Negotiation</option>
                  <option value="option2">Price Change</option>
                  <option value="option3">Price Increase</option>
                  <option value="option4">Product - Non ERP</option>
                </Select>
              </Td>
              <Td>{Math.floor(Math.random() * 1000000)}</Td>
              <Td>
                <Select
                  value={item.actionType}
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                >
                  <option value="option1">Price Negotiation</option>
                  <option value="option2">Price Change</option>
                  <option value="option3">Price Increase</option>
                  <option value="option4">Product - Non ERP</option>
                </Select>
              </Td>
              <Td>{Math.random() > 0.5 ? "In Progress" : "Completed"}</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export { DataTable };
