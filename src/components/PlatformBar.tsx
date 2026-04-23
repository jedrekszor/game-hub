import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import { SiSega } from "react-icons/si";
import type { Platform } from "../hooks/useGames";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformBar = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
    web: BsGlobe,
    sega: SiSega,
  };

  return (
    <HStack marginY={1.5}>
      {platforms.map((platform) => {
        console.log(platform);
        return (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformBar;
