import React from "react";
import recipesData from "./recipesData.js"

const RecipeFilterApp = () => {
    const [cartItem, setCartItem] = React.useState(0);
    const [filteredRating, setFilteredRating] = React.useState(recipesData);
    const [length, setLength] = React.useState(0);
    const [average, setAverage] = React.useState(0);
    const dropdownValues = [
    { label: "4.0+", value: "4.0+" },
    { label: "4.5+", value: "4.5+" },
    { label: "4.7+", value: "4.7+" },
    { label: "4.3+", value: "4.3+" },
    { label: "4.9+", value: "4.9+" }
    ];
    const handleSelect = (option) => {
    const filteredRatings = recipesData.filter((recipe) => {
    return recipe.rating >= parseFloat(option.value) })
    setFilteredRating(filteredRatings);
    const leng = filteredRatings.filter((recipe) => recipe !== undefined).length;
        const sum = filteredRatings.reduce((acc, recipe) => {
            return acc + Math.round(recipe.rating);
        }, 0);
        setAverage((sum / leng).toFixed(2));
        console.log('aver', sum);
        console.log("avg", sum, length ,(sum / leng).toFixed(2));
        setLength(leng);
        };
        const handleClick = () => {
            setCartItem(prev => prev+1);
        }

    return (
        <div>
        <h1>🍽️ Recipe Explorer</h1>
        <label htmlFor="rating">Filter by Rating:</label>
        <select id="rating" onChange={(e) => handleSelect({value: e.target.value})}>
            {dropdownValues.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
        ))}
      </select>
      <div>
        <label>🛒Cart item:{cartItem}</label>
       <h3> Average Rating:{average} ({length} Recipes)</h3>
                </div>
       
       <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"10px", marginTop:"20px"}}>
        {filteredRating.map((recipe) => (
        <div 
        key={recipe.id} 
        style={{border: "1px solid gray", height: "fit-content", padding: "10px",borderRadius: "5px"}}>
        <img src={recipe.image} width="80%"  height= "20%" alt={recipe.name} />
          <div style={{ fontWeight: "bold", paddingBottom: "30px" }}>{recipe.name}</div>        
          <div>🍴Couisine: {recipe.cuisine}</div>
          <div 
            style={{ padding: "10px" }}>
            ⭐Rating: {recipe.rating} ({recipe.reviewCount} reviews)
            </div>
          <button onClick={() => handleClick(recipe.id)} style={{marginTop:"10px", color: "white",padding:"10px 20px", borderRadius:"5px", backgroundColor:"green", border:"none", cursor:"pointer"}}>Add to Cart</button>
          </div>
      ))}
     </div>

    </div>
  );
};

export default RecipeFilterApp;
