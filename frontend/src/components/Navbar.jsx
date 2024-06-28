import { Box, Flex, Button, Image, useToast } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { AuthContext} from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL="http://localhost:8080"
const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout=async()=>{
    try {
      const response = await fetch(`${BASE_URL}/users/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${auth.accessToken}`
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      const result = await response.json();
      setAuth({
        isAuth: false,
        username: "",
        accessToken: "",
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      toast({
        title: `${result.message}`,
        status: "success",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
    }
  }
  return (
    <>
      <Box
        bg={"white"}
        px={{ base: 4, md: 16 }}
        borderBottom={"1px solid gray"}
        position={"fixed"}
        top={0}
        w={"100%"}
        zIndex={4}
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
                onClick={handleLogout}
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
