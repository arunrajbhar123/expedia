import {
  Container,
  Box,
  Image,
  Center,
  Text,
  Stack,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { hoverColor } from "./Variable";

function Footer() {
  const MenuItem = ({ name, link }) => {
    return (
      <Text fontSize="xs" textAlign={"left"} color="blue" _hover={{ textDecoration: hoverColor }}>
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </Text>
    );
  };
  return (
    <Container maxW="container.xl">
      <Box mt="50" mb="50" p="1">
        <Flex flexWrap="wrap">
          <Box>
            <Image
            marginTop="-12.5em"
              w="130px"
              src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
            />
          </Box>
          <Spacer />
          <Box mt="-px">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Company
              </Heading>
              <MenuItem
                link={"#"}
                name={"About us"}
              />
              <MenuItem
                link={"#"}
                name={"Jobs"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"List your property"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"Partnerships"}
              />
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Explore
              </Heading>
              <MenuItem
                link={"#"}
                name={"India travel guide"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"Hotels in India"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"Holiday rentals in India"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={" Holiday packages in India"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"Domestic flights"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"Car hire in India"}
              />
              <MenuItem
                link={"#"}
                name={"All accommodation types"}
              />
              <MenuItem
                link={"#"}
                name={"Travel blog"}
              />
            </Stack>
          </Box>
          <Spacer />
          <Box mt="-px">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Terms and policies
              </Heading>
              <MenuItem
                link={"#"}
                name={"Privacy Statement"}
              />
              <MenuItem
                link={"#"}
                name={"Terms of use"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={" Vrbo terms and conditions"}
              />
            </Stack>
          </Box>
          <Spacer />
          <Box mt="-px">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Help
              </Heading>
              <MenuItem
                link={"#"}
                name={"Support"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"Change or cancel your booking"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={"Refund process and timelines"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={" Book a flight using an airline credit"}
              />
              <MenuItem
                link={
                  "#"
                }
                name={" International travel documents"}
              />
            </Stack>
          </Box>
        </Flex>
      </Box>
      <Container maxW="container.xl" borderTop="1px" borderTopColor="#c5c7cc">
        <Box mt="-px" mb="12px">
          <Center>
            <Image
              w="200px"
              src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"
            />
          </Center>
          <Text fontSize="xs">
            © 2022 Expedia, Inc., an Expedia Group company / Expedia Asia
            Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved.
            Expedia and the Airplane Logo are trademarks or registered
            trademarks of Expedia, Inc.
          </Text>
        </Box>
      </Container>
    </Container>
  );
}

export default Footer;