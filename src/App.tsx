import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  const isLarge = useBreakpointValue({ base: false, lg: true });
  const [genre, setGenre] = useState<Genre>(null);
  const [platform, setPlatform] = useState<Platform>(null);

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
          <GenreList
            onGenreSelect={(genre) => setGenre(genre)}
            selectedGenre={genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          onPlatformSelect={(platform) => setPlatform(platform)}
          selectedPlatform={platform}
        />
        <GameGrid genre={genre} platform={platform} />
      </GridItem>
    </Grid>
  );
}

export default App;
