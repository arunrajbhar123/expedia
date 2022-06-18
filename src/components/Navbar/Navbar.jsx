import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  PopoverBody,
  PopoverFooter,
  useDisclosure,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import {useNavigate} from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate=useNavigate();
const handleLogin=()=>{
  navigate("/login");
}

const handleHome=()=>{
  navigate("/");
}
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray:600", "white")}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray:200", "gray:900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          marginLeft={"110px"}
        >
          <Link to="/">
            <Image
              w="110px"
              src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
              alt="Dan Abramov"
              onClick={handleHome}
            />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <div style={{ display: "flex", marginLeft: "-25px" }}>
              <DesktopNav />
              <ChevronDownIcon marginTop={"6px"} />
            </div>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          marginRight={"150px"}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <i
            style={{ marginRight: "-20px", marginTop: "2.5px" }}
            className="fa-solid fa-globe"
          ></i>
          <Link
            to="/"
            style={{
              fontWeight: "650",
              fontSize: "14px",
              textDecoration: "none",
            }}
            _hover={{ color: "blue" }}
          >
            {" "}
            English
          </Link>
          <Link
            to="/"
            style={{
              fontWeight: "650",
              fontSize: "14px",
              textDecoration: "none",
            }}
            _hover={{ color: "blue" }}
          >
            Support
          </Link>
          <Link
            to="/"
            style={{
              fontWeight: "650",
              fontSize: "14px",
              textDecoration: "none",
            }}
            _hover={{ color: "blue" }}
          >
            Trips
          </Link>
          <Popover>
            <PopoverTrigger>
              <Link
                to="/signin"
                style={{
                  fontWeight: "650",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                _hover={{ color: "blue" }}
                
              >
                SignIn
              </Link>
            </PopoverTrigger>
            <Portal >
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Text style={{color:"black",fontSize:"20px", fontWeight:"600"}}> Members can access discounts and special features</Text>
                 {/* <PopoverHeader></PopoverHeader> */}
                  <Button colorScheme="blue" style={{width:"270px",margin:"20px"}} onClick={handleLogin}>
                    <Link to="/" style={{textDecoration:"none"}} >Sign in</Link>
                  </Button>
                  </PopoverBody>
                  <PopoverBody>
                  <Button style={{width:"270px",marginLeft:"20px"}}>

                   <Link to="#"  style={{textDecoration:"none", padding:"70px",color:"blue", fontWeight:"500"}} onClick={handleHome}/>

                    <Link to="/signin"  style={{textDecoration:"none",color:"blue", fontWeight:"500", marginLeft:"-5em"}}>

                    Create a free account</Link>
                    </Button>
                    </PopoverBody>
               
                <Link to="/"  style={{textDecoration:"none", margin:"20px"}} _hover={{color:"blue"}}>List of favourites</Link>
                <Link to="/"  style={{textDecoration:"none",marginLeft:"20px"}} _hover={{color:"blue"}}>Expedia Rewards</Link>

                <PopoverFooter style={{marginTop:"30px",marginLeft:"10px"}} _hover={{color:"blue"}}>FeedBack</PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack

          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
 
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "More travel",
    children: [
      {
        label: "Stays", 
           
        href: "#",
      },
      {
        label: "Flights",
        href: "#",
      },
      {
        label: "Cars",
        href: "#",
      },
      {
        label: "Packages",
        href: "#",
      },
      {
        label: "Holiday activities",
        href: "#",
      },
      {
        label: "Deals",
        href: "#",
      },
      {
        label: "Groups & meetings",
        href: "#",
      },
     
    ],
  },
 
];
