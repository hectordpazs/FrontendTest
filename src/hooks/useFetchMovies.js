import { useState, useEffect } from "react"
import { getMovies } from "../helpers/getMovies";

export const useFetchMovies = (page=1)=>{
    const [state, setState] = useState({data:[],loading:true});

    useEffect(()=>{
        getMovies(page)
       .then(movies=>{
            setState({
                data:movies,
                loading:false
            })
        })
    }, [page])

    return state;
}