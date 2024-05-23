import { Heading, VStack, Image, HStack, Text } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";
import { UseGetIsDevice } from "@/hooks/useGetIsDevice";
import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import { ARTIST_DATA, copy } from "../data";
import { ArtistBoxComponent } from "@/components/ArtistBoxComponent";

export const ArtistPage = () => {
  const { isIpad, isIpadHorizontal, isMobile } = UseGetIsDevice();
  const { sponsorLogoContainer } = UseGetSizeForDevices();

  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title={"Seven Hills Tattoo Convention"}
        subtitle={"31/08/2024 - 01/09/2024"}
        tagline="Kelham Island Museum"
        isButton={true}
      />

      <VStack height="auto" width="full" paddingY={"50px"} gap={10}>
        <Heading
          as="h1"
          size={"2xl"}
          color="black  "
          padding={"5px"}
          fontStyle={"italic"}
          alignSelf={"center"}
          borderBottom={"solid 2px black"}
        >
          Artists
        </Heading>

        <HStack
          display={"flex"}
          w="80%"
          h="full"
          justifyContent={"space-evenly"}
          alignItems=""
          flexWrap={"wrap"}
        >
          {!!ARTIST_DATA &&
            ARTIST_DATA.map((item) => (
              <ArtistBoxComponent
                key={item.instaHandle}
                artistName={item.artistName}
                imageLink={`/artists/${item.artistName.replace(
                  /\s+/g,
                  ""
                )}.jpeg`}
                instaHandle={item.instaHandle}
              />
            ))}
        </HStack>
      </VStack>
      <SponsorLogoContainer />

      <Footer />
    </VStack>
  );
};
