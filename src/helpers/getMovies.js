
export const getMovies  = async (page) =>{
    const apiKey = 'afbba86e608ce474cd9283481806a32a';
    const url = 'https://api.themoviedb.org/3/movie/popular?';
    const resp = await fetch(`${url}api_key=${apiKey}&language=en-US&page=${page}`);
    const {results} = await resp.json();

    const movies = results.map(movie=>{
        return{
            id: movie.id,
            title: movie.title,
            url: movie.backdrop_path,
            date: movie.release_date,
            favorite: false
        }
    })
    return movies;
}