import { Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwtich = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Switch.Root
      checked={colorMode === "dark"}
      onCheckedChange={() => toggleColorMode()}
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label whiteSpace={"nowrap"}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwtich;
