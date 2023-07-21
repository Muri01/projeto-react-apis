export const URL_BASE = "https://pokeapi.co/api/v2"

export const pokemonMock = {
    id: "",
    name: "",
    types: [
      {type: {
          name: "", 
          url:""
        }
      }, 
      {
        type: {
          name: "",
          url:""
        }
      }
    ],
    sprites: {
      other:{
        home:{
          // front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          front_default:"https://media.tenor.com/8sTMqGWjYAQAAAAC/ball-pokemon.gif" //imagem da internet
        }
      }
    }
  }

export const PokemonDetailsMock = {
  ...pokemonMock,
  moves: [
    {
      move:{
        name:"move1"
      }
    },
    {move:{
      name:"move2"
    }},
    {move:{
      name:"move3"
    }},
    {move:{
      name:"move4"
    }},
  ],
  stats: [
    {
      base_stat: 45,
      stat:{
        name:"HP"
      }
    },
    {
      base_stat: 49,
      stat:{
        name:"attack"
      }
    },
    {
      base_stat: 49,
      stat:{
        name:"defense"
      }
    },
    {
      base_stat: 65,
      stat:{
        name:"special-attack"
      }
    },
    {
      base_stat: 65,
      stat:{
        name:"special-defense"
      }
    },
    {
      base_stat: 45,
      stat:{
        name:"speed"
      }
    },
  ]
}