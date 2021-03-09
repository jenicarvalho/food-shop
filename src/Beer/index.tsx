import React, { useState } from 'react';
import axios from 'axios'
import { Beers } from '../types/beer'

const Beer = () => {

  const [beer, setBeer] = useState<Beers[]>()

  const busca = () => {
    axios.get("https://api.punkapi.com/v2/beers/?per_page=8")
      .then(resposta => setBeer(resposta.data))
  }

  return (
    <div className="food-beer-list food-shop">
      
      <h1>Tipos de Cerveja</h1>
      <button onClick={busca}>Buscar Cerveja</button>
      { beer !== undefined && 
      <div className="beers-list">
        { beer.map(item => (
          <div className="beer" key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.tagline}</span>
            <small>{item.description}</small>
          </div>
        ))}
      </div>
    }
    </div>
  );
}

export default Beer;