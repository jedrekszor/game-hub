import { HStack, ListItem, Image, Button } from "@chakra-ui/react";
import type { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreItem = ({ genre, onGenreSelect, selectedGenre }: Props) => {
  const isSelected = selectedGenre !== null && selectedGenre?.id === genre.id;

  return (
    <ListItem key={genre.id} paddingY={"5px"}>
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize={"32px"}
          borderRadius={8}
        />
        <Button
          onClick={() => onGenreSelect(genre)}
          variant={isSelected ? "subtle" : "outline"}
          fontWeight={isSelected ? "bold" : "normal"}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;
