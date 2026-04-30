import { HStack, Image, Button } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwtich from "./ColorModeSwtich";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
  onHomeClick: () => void;
}

const Navbar = ({ onSearch, onHomeClick }: Props) => {
  return (
    <>
      <HStack padding={"10px"}>
        <Button p={0} boxSize={"60px"} onClick={onHomeClick}>
          <Image src={logo} />
        </Button>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwtich />
      </HStack>
    </>
  );
};

export default Navbar;
