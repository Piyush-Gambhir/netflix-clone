"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
type Props = {
  movieUrl: string;
};

export default function VideoPlayer({ movieUrl }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      <ReactPlayer className="w-full h-full" controls playing src={movieUrl} />
    </div>
  );
}
