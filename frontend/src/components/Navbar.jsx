import { Box, Flex, Button, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <Box
        bg={"white"}
        px={{ base: 4, md: 16 }}
        borderBottom={"1px solid gray"}
        position={"sticky"}
        top={0}
        zIndex={3}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            onClick={() => {
              navigate("/");
            }}
            _hover={{cursor:"pointer"}}
          >
            <Image src={logo}></Image>
          </Box>

          <Flex gap={{ base: "5px", md: "10px" }}>
            {auth.isAuth ? (
              <Button
                bg={"#BA3B93"}
                _hover={{ bg: "#ff50c9" }}
                color={"white"}
                size={"sm"}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  bg={"#BA3B93"}
                  _hover={{ bg: "#ff50c9" }}
                  color={"white"}
                  size={"sm"}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  bg={"#BA3B93"}
                  _hover={{ bg: "#ff50c9" }}
                  color={"white"}
                  size={"sm"}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export { Navbar };
