import React, { useEffect, useState } from "react";
import { DetailWrapper, Info, Button } from "../../styled/styles";
import { useParams } from "react-router-dom";

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");

  let id = useParams().food;

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const dataRecipe = await data.json();
    console.log(dataRecipe);
    setRecipe(dataRecipe);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);
  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instruction" ? "active" : ""}
          onClick={() => {
            setActiveTab("instruction");
          }}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </Button>
        {activeTab === "instruction" && (
          <div>
            {/* Sirve para que cuando se consiga algo que ya tienen las etiquetas de
            html, las imprima como tal, y no como texto */}
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};
