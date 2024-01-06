"use client";
import { useState, useCallback, useEffect } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import PlayButton from "@/components/browse/play-button";
import useInfoModalStore from "@/hooks/user-info-modal-store";
import { getRandomMovie } from "@/data/movie";

type Props = {};

export default function Billboard({}: Props) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      try {
        const movie = await getRandomMovie();
        setData(movie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, []);

  const { openModal } = useInfoModalStore();
  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  if (loading) {
    return <div className="relative h-[56.25vw] bg-black"></div>;
  }

  return (
    <div className="relative h-[56.25vw]">
      <video
        poster={data.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        loop
        src={data.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data.id} />
          <button
            onClick={handleOpenModal}
            className="
          bg-white
          text-white
            bg-opacity-30 
            rounded-md 
            py-1 md:py-2 
            px-2 md:px-4
            w-auto 
            text-xs lg:text-lg 
            font-semibold
            flex
            flex-row
            items-center
            hover:bg-opacity-20
            transition
          "
          >
            <InformationCircleIcon className="w-4 md:w-7 mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
