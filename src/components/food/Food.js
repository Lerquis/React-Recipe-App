import React, { useState, useEffect } from "react";
import { Grid, Card } from "../../styled/styles";
import { Link, useParams } from "react-router-dom";

export const Food = () => {
  const [recipes, setRecipes] = useState([]);
  let params = useParams();

  const getFood = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setRecipes(recipes.results);
  };

  useEffect(() => {
    getFood(params.food);
  }, [params]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
