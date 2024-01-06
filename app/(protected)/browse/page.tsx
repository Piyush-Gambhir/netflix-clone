import Navbar from "@/components/browse/navbar";
import Billboard from "@/components/browse/billboard";
import MovieList from "@/components/browse/movie-list";
import InfoModal from "@/components/browse/info-modal";

import useMovieList from "@/hooks/user-movie-list";
import useFavorites from "@/hooks/user-favourites";
import useInfoModalStore from "@/hooks/user-info-modal-store";

import { getAllMovies } from "@/data/movie";
import { getUserFavorites } from "@/data/user";

export default async function Browse() {
  // const { isOpen, closeModal } = useInfoModalStore();
  const movies = await getAllMovies();
  return (
    <main>
      {/* <InfoModal visible={isOpen} onClose={closeModal} /> */}
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        {/* <MovieList title="My List" data={userFavourites} /> */}
      </div>
    </main>
  );
}
