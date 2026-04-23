import { HStack, ListItem, Image, Button } from "@chakra-ui/react";
import type { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
}
const GenreItem = ({ genre }: Props) => {
  return (
    <ListItem key={genre.id} paddingY={"5px"}>
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize={"32px"}
          borderRadius={8}
        />
        <Button fontSize={"lg"} variant={"subtle"}>
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;
