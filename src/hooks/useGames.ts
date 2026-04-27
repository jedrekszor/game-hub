import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (genre: Genre | null, platform: Platform | null) => {
  return useData<Game>(
    "/games",
    { params: { genres: genre?.id, parent_platforms: platform?.id } },
    [genre?.id, platform?.id],
  );
};

export default useGames;
