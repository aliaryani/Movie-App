import ImageMedia from "@/components/Common/ImageMedia";
import classNames from "classnames";
import { reqGetMovies } from "@/api";
import { useQuery } from "react-query";
import MoviesList from "./MoviesList";
const HomePage = () => {
  const { data, isLoading } = useQuery("movies", reqGetMovies);

  return (
    <>
      <div className="relative mt-10 w-full">
        <div
          className={classNames(
            "aspect-h-5 aspect-w-8 relative  w-full overflow-hidden  rounded-[8px] md:aspect-h-3  md:rounded-[12px]"
          )}
        >
          <ImageMedia src={"/joker.jpeg"} alt={""} />
        </div>
        <div className="absolute left-6 top-6">
          <p className="text-md font-semibold text-brown-200">Trending</p>
          <p className="mt-2 text-3xl font-bold uppercase text-white">joker</p>
        </div>
        <p className="text-md absolute left-6 bottom-6 font-semibold text-grey-light">
          24 Stories
        </p>
      </div>
      <p className=" mt-12 text-xl font-semibold text-white">Recent Movies</p>
      <MoviesList movies={data?.Search} isLoading={isLoading} />
    </>
  );
};

export default HomePage;
