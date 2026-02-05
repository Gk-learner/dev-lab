// StarRating.js

import React,{useState} from "react";

function StarRating() {
  const [rating, setRating] = useState('')
  // Step 1: Create state variables
  // use `rating` to store the selected rating, and `setRating` to update it

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Star Rating</h1>
      {Array.from({ length: 5 }, (_, i) => {
        const starIndex = i+1;
        return (
          <span
            key={starIndex}
            style={{
                fontSize: "50px",
                color: i < rating ? "gold" : "gray",
                cursor: "pointer"
            }}
            onClick={() => setRating(i+1)}
        >
            ★
        </span>
        );
      })}  
          <p>
            {`Rating: ${rating}`}
          </p>  


      {/* Step 2: Render 5 stars using a loop ★★★★★ */}
      {/* Step 3: Update rating when a star is clicked */}
      {/* Step 4: Style stars based on rating */}

      {/* Step 5: Display current rating */}
      
      {/* Step 6: Add a Reset button to clear the rating */}
    </div>
  );
}

export default StarRating;
