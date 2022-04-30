import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Card } from "../../styled/styles";

export const Searched = () => {
  const [recipes, setRecipes] = useState([]);
  let params = useParams();

  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setRecipes(recipes.results);
  };

  useEffect(() => {
    getSearch(params.food);
  }, [params]);
  return (
    <Grid>
      {recipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};
