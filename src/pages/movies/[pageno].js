import React from "react";
import {
  Button,
  useColorModeValue,
  Stack,
  Heading,
  Flex,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
export const getStaticPaths = async () => {
  let res = await fetch("https://movies-database-gold.vercel.app/movies");
  let data = await res.json();
  const paths = data.map((el) => {
    return {
      params: {
        pageno: el.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  console.log("id", id);
  let res = await fetch(`https://movies-database-gold.vercel.app/movies/${id}`);
  let data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const SIngleData = ({ data }) => {
  console.log("data", data);
  return (
    <Box
      maxW={"470px"}
      w={"full"}
      m={"auto"}
      height={"750px"}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      marginTop={"40px"}
    >
      <Image h={"420px"} w={"full"} src={data.Images[0]} objectFit={"cover"} />
      <Flex justify={"center"} mt={-12}></Flex>
      <br />
      <br />
      <br />
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {data.Title}
          </Heading>
          <Text color={"gray.500"}>{data.Plot}</Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{data.rated}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {data.imdbRating}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{data.Laungage}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {data.Director}
            </Text>
          </Stack>
        </Stack>
        <Text fontWeight={600}>Actors 👉👉{data.Actors}</Text>
        <Text fontWeight={600}>Country👉{data.Country}</Text>
        <Text fontWeight={600}>Drama type👉👉{data.Genre}</Text>
        <Text fontWeight={600}>Realesed Date👉{data.Released}</Text>
      </Box>
    </Box>
  );
};

export default SIngleData;
