const useBillboard = () => {
    const movie = await getRandomMovie();
    console.log(movie);
    console.log("randomMovie");
  }, []);
};
