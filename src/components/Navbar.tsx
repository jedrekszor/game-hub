import { HStack, Image, Input, InputGroup } from "@chakra-ui/react";

import { LuSearch } from "react-icons/lu";
import logo from "../assets/logo.svg";
import ColorModeSwtich from "./ColorModeSwtich";

const Navbar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <InputGroup startElement={<LuSearch />}>
          <Input placeholder="Search" />
        </InputGroup>

        <ColorModeSwtich />
      </HStack>
    </>
  );
};

export default Navbar;
