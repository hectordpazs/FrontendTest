
export const getMovieById  = async (id) =>{
    const apiKey = 'afbba86e608ce474cd9283481806a32a';
    const url = `https://api.themoviedb.org/3/movie/${id}?`;
    
    try {
        const resp = await fetch(`${url}api_key=${apiKey}&language=en-US`);
        if(resp.status !== 200) return false
        const data = await resp.json();
        const movie = {
            id: data.id,
            title: data.title,
            url: data.backdrop_path,
            date: data.release_date,
            overview: data.overview
        } 
        return movie;
    } catch (error) {
        return false
    }

    
    
}