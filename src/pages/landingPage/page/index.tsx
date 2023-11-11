import { Heading, VStack, Image, HStack, Text } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";
import { ArticleComponent } from "@/components/ArticleComponent";

export const LandingPage = () => {
  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title={"A Tattoo Convention by Tattooers, for Sheffield!"}
        subtitle={"31/08/2024 - 01/09/2024"}
        tagline="Kelham Island Museum"
      />

      <VStack height="auto" width="80%" paddingY={"50px"}>
        <ArticleComponent
          title="By Tattooers. For The People Of Sheffield"
          articleText="Seven Hills is a new tattoo convention run by artists who want to
            honour the traditions of the trade in their own way, in their own
            city. Our approach to achieving this starts with the artists
            themselves. As a tattooer-run festival, we understand the importance
            of bringing an array of artists from around the UK and beyond who
            all specialise in a variety of styles. We’ll have world-renowned
            artists rubbing shoulders with promising young artists in an event
            that celebrates the history of the trade and its future."
          image={"/kelham.jpg"}
        />

        <ArticleComponent
          title="When Is it?"
          articleText="Seven Hills Tattoo Convention will take place in Sheffield on 1st &
          2nd September 2024. We’re looking to create a unique, inclusive and
          diverse convention experience that combines everything that we love
          about tattooing. A good tattoo convention for the people who love
          the artform, by tattooers themselves. Seven Hills is a truly one of
          a kind event in Sheffield, bringing you the most talented and innovative artists out
          there. All in one place. All in the land of The Seven Hills."
          image={"/kelham.jpg"}
          orientation="flex-end"
        />

        <ArticleComponent
          title="The Venue"
          articleText="Ask any Sheffield native about their city’s history, and I guarantee you’ll
          hear the word: ‘pride’.  Seven Hills will take place in Kelham Island museum - the iconic and 
          historical heart of Sheffield’s storied history as the Steel City. This venue itself sits on a man-made 
          island that’s over 900 years old. You can feel the history in the surrounding area, but the museum itself 
          is much more than a tribute to Sheffield’s heritage- It’s a versatile venue used for a wide range of events and, come September 2024,
           a tattoo convention for the first time."
          image={"/kelham.jpg"}
          orientation="flex-start"
        />
        <ArticleComponent
          title="The Vendors"
          articleText="We’ll also be inviting a selection of local independent vendors from around the UK to join us at Seven Hills. You’ll be able to browse what other creatives in the local area have been busy crafting, building, or designing, giving you a chance to come home with something else other than a freshly-wrapped tatt. We’ve also made sure to have local food vendors on-site, catering to all dietary requirements, and ready to keep you fuelled for the day."
          image={"/kelham.jpg"}
          orientation="flex-end"
        />
      </VStack>
      <SponsorLogoContainer />

      <Footer />
    </VStack>
  );
};
