"use server";
import { db } from "@/lib/db";

export const getMovieById = async (id: string) => {
  try {
    const movie = await db.movie.findUnique({ where: { id } });

    return movie;
  } catch {
    return null;
  }
};

export const getAllMovies = async () => {
  try {
    const movies = await db.movie.findMany();
    return movies;
  } catch {
    return null;
  }
};

export const getRandomMovie = async () => {
  try {
    const movieCount = await db.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovie = await db.movie.findFirst({ skip: randomIndex });
    return randomMovie;
  } catch {
    return null;
  }
};
