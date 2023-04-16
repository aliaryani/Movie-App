import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import classNames from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ImageMedia from "@/components/Common/ImageMedia";
import { Movie } from "@/types/Movie";

interface Props {
  isLoading: boolean;
  movies?: Movie[];
}

const MoviesList = ({ movies, isLoading }: Props) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={14}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper mt-8"
    >
      {isLoading ? (
        <div className="flex animate-pulse space-x-4">
          {[...Array(4)].map((item) => (
            <div className="h-32 !w-24 rounded bg-grey-light md:!w-[200px]"></div>
          ))}
        </div>
      ) : (
        movies?.map((movie: Movie) => (
          <SwiperSlide className="!w-24 md:!w-[200px]">
            <div
              className={classNames(
                " relative h-32 w-full overflow-hidden rounded-[8px] border border-2 border-grey-light md:h-72  md:rounded-[12px]"
              )}
            >
              <ImageMedia src={movie?.Poster} alt={movie?.Title} />
            </div>
            <p className="mt-2 text-sm text-grey-light md:text-base">
              {movie?.Title}
            </p>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default MoviesList;
