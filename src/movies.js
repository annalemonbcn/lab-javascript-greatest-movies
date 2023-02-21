// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // Apply map
  const allDirectors = moviesArray.map(movie => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // Apply filter
  const spielbergMovies = moviesArray.filter(function (movie){
    const drama = 'Drama';
    // Filter by director and drama genre
    if((movie.director === 'Steven Spielberg') && (movie.genre.includes(drama))){
        return movie;
    }
  });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // If array is empty
  if(moviesArray.length === 0){
    return 0;
  } else {
    // Apply reduce
    let totalScore = moviesArray.reduce(function (acc, movie){
      // If movie has no score -> score = 0
      if((movie.score === '') || (Object.keys(movie).length === 0)){
        movie.score = 0;
      }
      // Return result
      return acc + movie.score / moviesArray.length;
    }, 0);
    // Return result up to 2 decimals
    return Math.round(totalScore * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // Filter by drama movies
  const dramaMovies = moviesArray.filter(function (movie){
    const drama = 'Drama';
    if(movie.genre.includes(drama)){
        return movie;
    }
  });

  // Calculate average of drama movies
  if(dramaMovies.length === 0){
    return 0;
  }
  // Average drama movies
  else {
    // Apply reduce
    let dramaMoviesAverageScore = dramaMovies.reduce(function (acc, movie){
      // Return result
      return acc + movie.score / dramaMovies.length;
    }, 0);
      // Return result up to 2 decimals
      return Math.round(dramaMoviesAverageScore * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
