import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../hooks/useGames";

interface Props {
  onPlatformSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant={"outline"}>
          {selectedPlatform !== null ? selectedPlatform.name : "Platforms"}{" "}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => onPlatformSelect(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
