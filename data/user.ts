"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export const getUserFavorites = async () => {
  const user = await currentUser();
  try {
    const favoritedMovies = await db.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return user?.favorites;
  } catch {
    return null;
  }
};
