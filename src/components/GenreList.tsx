import useGenres, { type Genre } from "../hooks/useGenres";
import { List } from "@chakra-ui/react";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onGenreSelect: (genre: Genre) => void;
}

const GenreList = ({ onGenreSelect }: Props) => {
  const { data, error, loading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  if (error) return null;
  return (
    <>
      <List.Root variant={"plain"}>
        {loading &&
          skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <GenreItem
            onGenreSelect={onGenreSelect}
            key={genre.id}
            genre={genre}
          />
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
