import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";

function App() {
  const isLarge = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area={"nav"} bg={"red"}>
        Navbar
      </GridItem>
      <Show when={isLarge}>
        <GridItem area={"side"} bg={"blue"}>
          Side
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"green"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
