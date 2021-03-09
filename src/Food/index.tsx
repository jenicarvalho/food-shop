import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Comida } from '../types/comidas'
import { Categoria } from '../types/categoria'

const Foods = () => {

  const [foods, setFoods] = useState<Comida[]>([])
  const [foodCategories, setFoodCategories] = useState<Categoria[]>([])
  const [selectedCategorie, setSelectedCategorie] = useState<String>("")
  const [input, setInput] = useState<String>("")

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(resposta => setFoodCategories(resposta.data.categories))
  }, [])

  useEffect(() => {

    if(selectedCategorie !== "") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategorie}`)
        .then(resposta => setFoods(resposta.data.meals))
    }
  }, [selectedCategorie])

  useEffect(() => {
    if(input !== "") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(resposta => setFoods(resposta.data.meals))
    }
  }, [input])

  return (
    <div className="food-beer-list food-shop">
      <h1>Tipos de pratos</h1>
      <p>
        Selecione uma categoria ou digite a comida (em inglês):
        <input type="text" placeholder="Digite a comida..." onChange={(e) => setInput(e.target.value)}/>
      </p>

      <ul>
        {
          foodCategories !== null &&
          foodCategories.map((categories: any) => (
            <li key={categories.idCategory} onClick={() => setSelectedCategorie(categories.strCategory)}>{categories.strCategory}</li>
          ))
        }
      </ul>
      { selectedCategorie !== null &&  <h2>Tipo selecionado: <strong>{selectedCategorie}</strong></h2> }
      
      <div className="food-container">
        { 
          foods !== null &&
          foods.map((food: any) => (
            <div className="food-item" key={food.idMeal}>
              <img src={food.strMealThumb} />
              <p>{food.strMeal}</p>
            </div>
        ))}
      </div>

    </div>
  );
}

export default Foods;