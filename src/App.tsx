import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const isLarge = useBreakpointValue({ base: false, lg: true });
  const [genre, setGenre] = useState<Genre>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show when={isLarge}>
        <GridItem area={"side"} paddingX={5}>
          <GenreList onGenreSelect={(genre) => setGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid genre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
