import { useEffect, useState } from "react";
import { URL_BASE } from '../constants/contanst';
import axios from "axios";

export const useRequest= (stateInitial)=> {
    const [pokemonsInitial, setPokemonsInitial] = useState(stateInitial)

    useEffect(()=>{
        axios
            .get(`${URL_BASE}/pokemon/`)
            .then((resp)=>{
                setPokemonsInitial(resp.data.results)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

 return [pokemonsInitial,setPokemonsInitial]
}