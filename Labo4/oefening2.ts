interface Movie {
    title: string,
    year: number,
    actors: string[],
    metascore: number,
    seen: boolean
}

let thematrix: Movie = {title: "The Matrix", year: 1999, actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], metascore: 73, seen: true};

let myfavoritemovie: Movie = {title: "Shrek", year: 2001, actors: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"], metascore: 84, seen: true};

let myworstmovie: Movie = {title: "The Last Airbender", year: 2010, actors: ["Noah Ringer", "Dev Patel", "Nicola Pelts", "Jackson Rathbone"], metascore: 20, seen: true};

function wasMovieMadeInThe90s(movie: Movie){
    if(movie.year >= 1990 && movie.year < 2000){
        return true;
    }
    else{
        return false;
    }
}

function averageMetaScore(movies: Movie[]){
    let average: number = 0;
    for(let i = 0; i < movies.length; i++){
        average += movies[i].metascore;
    }
    return average /= movies.length;
}

console.log(wasMovieMadeInThe90s(thematrix));
console.log(wasMovieMadeInThe90s(myfavoritemovie));

let allefilms: Movie[] = [thematrix, myfavoritemovie, myworstmovie];

console.log(averageMetaScore(allefilms));