import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
  const [slider, setSlider] = React.useState(null);

  console.log("This is homepage")

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const cards = [
    {
      title: "",
      text: "",
      image:
        "https://auditionformdates.in/wp-content/uploads/2023/02/Lost-Movie-Release-Date-2023.jpg",
    },
    {
      title: "Doctor Strange",
      text: "",
      image:
        "https://images.thedirect.com/media/article_full/every-marvel-character-who-appears-in-doctor-strange-2-multiverse-of-madnes_HnnfuDP.jpg",
    },
    {
      title: "EndGame",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://m.economictimes.com/thumb/msid-68595193,width-1200,height-900,resizemode-4,imgsize-965088/avengers-endgame.jpg",
    },
    {
      title: "EndGame",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://m.economictimes.com/thumb/msid-68595193,width-1200,height-900,resizemode-4,imgsize-965088/avengers-endgame.jpg",
    },
    {
      title: "EndGame",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://m.economictimes.com/thumb/msid-68595193,width-1200,height-900,resizemode-4,imgsize-965088/avengers-endgame.jpg",
    },
  ];

  return (
    <div style={{ justifyContent: "center", textAlign: "center",height:"1400px" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "600", color: "blue" }}>
        Hello Everyone Welcome to movie Zone
      </h1>
      <Link href={"/movies"}>
        <h1 style={{ fontSize: "25px", color: "red", fontWeight: "800" }}>
        Click on 👉👉  Movies
        </h1>
      </Link>
      <Box
        position={"relative"}
        height={"1000px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}

          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"1000px"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
              objectFit={"contain"}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default Home;
