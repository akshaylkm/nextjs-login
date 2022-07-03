import { Flex,Heading,Input,Button,Box,useColorMode, useColorModeValue} from "@chakra-ui/react"
import { WbSunny,DarkMode } from "@mui/icons-material";
import { useState } from "react";
const Home = ()=>{
 const [icon,setIcon]= useState(false)
  const {toggleColorMode} = useColorMode();
  const formBackground = useColorModeValue("gray.100","gray.700")
 return(
  <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
    <Flex position={'relative'} direction={"column"} background={formBackground} rounded={6}  padding={12}>
     <Heading mb={5}>Log In</Heading>
     <Input placeholder="Enter your Email..." variant={'filled'} mb={3} type="email"/>
     <Input placeholder="Password" variant={'filled'} mb={6} type="password"/>
     <Button colorScheme='teal' variant='solid'>Log In</Button>
     <Box position={"absolute"} top={2} right={2} cursor={"pointer"} onClick={()=>{
      toggleColorMode();
      setIcon(!icon);
     }} >
       {icon ? <WbSunny/> : <DarkMode/>}
     </Box>
    </Flex>
  </Flex>
 )
}

export default Home;