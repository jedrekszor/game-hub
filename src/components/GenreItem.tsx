import { HStack, ListItem, Image, Text } from "@chakra-ui/react";
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
        <Text fontSize={"lg"}>{genre.name}</Text>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;
