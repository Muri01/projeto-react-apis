export const goToPokedex = (navigate) =>{
    navigate("/pokedex")
  }

export const goToPokemonList = (navigate) =>{
    navigate("/")
  }

export const goToPokemonDatails = (navigate, id) =>{
      navigate(`/details/${id}`)
  }

export const goToBack = (navigate)=>{
    navigate(-1)
}