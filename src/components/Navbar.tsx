import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwtich from "./ColorModeSwtich";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwtich />
      </HStack>
    </>
  );
};

export default Navbar;
