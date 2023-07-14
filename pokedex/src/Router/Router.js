import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PokedexListPage from "../Pages/PokedexListPage/PokedexListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetailsPage from "../Pages/PokemonDetailsPage/PokemonDatailsPage"
import Header from "../Components/Header/Header";

export default function Router() {
 return (
     <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index path='/' element={<PokedexListPage/>}/>
                <Route path ="/pokedex" element={<PokedexPage/>}/>
                <Route path ="/details/:id" element={<PokemonDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}