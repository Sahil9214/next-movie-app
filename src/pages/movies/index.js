import React from "react";
import { Button, useColorModeValue,Stack,Heading, Flex, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
export const getStaticProps = async () => {
  let res = await fetch("https://movies-database-gold.vercel.app/movies");
  let data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Movies = ({ data }) => {
  console.log("data", data);
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",margin:"auto"}}>
        {
            data.map((el,i)=>{
                return (
                    <Box key={i}
                    maxW={'470px'}
                    w={'full'}
                    m={"auto"}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                
                    <Image
                      h={'120px'}
                      w={'full'}
                      src={el.Images[0]}
                      objectFit={'cover'}
                    />
                    <Flex justify={'center'} mt={-12}>
                     
                    </Flex>
            <br/>
            <br/>
            <br/>
                    <Box p={6}>
                      <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                          {el.Title}
                        </Heading>
                        <Text color={'gray.500'}>{el.Plot}</Text>
                      </Stack>
            
                      <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                          <Text fontWeight={600}>{el.rated}</Text>
                          <Text fontSize={'sm'} color={'gray.500'}>
                           {el.imdbRating}
                          </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                          <Text fontWeight={600}>{el.Laungage}</Text>
                          <Text fontSize={'sm'} color={'gray.500'}>
                       {el.Director}
                          </Text>
                        </Stack>
                      </Stack>
            
                  <Link href={`/movies/${el.id}`}>    <Button
                        w={'full'}
                        mt={8}
                     bg={"DarkOrchid"}
                        color={'black '}
                        rounded={'md'}
                        fontWeight={"800"}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}>
                      See More
                      </Button>
                      </Link>
                    </Box>
                  </Box>
                )
            })
        }
     
    </div>
  );
};

export default Movies;
