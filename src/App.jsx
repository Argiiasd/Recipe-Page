import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="image-container">
          <img src="../image-omelette.jpeg" className="image" />
        </div>

        <div className="text">
          <h1 className="title">Simple Omelette Recipe</h1>
          <p className="description">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="prep-time">
            <p className="prep-time-title">Preparation time</p>
            <ul className="list">
              <li className="list-item">
                <b className="bold">Total:&nbsp;</b> Approximately 10 minutes
              </li>
              <li className="list-item">
                <b className="bold">Preparation:&nbsp;</b> 5 minutes
              </li>
              <li className="list-item">
                <b className="bold">Cooking:&nbsp;</b> 5 minutes
              </li>
            </ul>
          </div>

          <h2 className="sub-title">Ingredients</h2>
          <ul className="list second">
            <li className="list-item second">2-3 large eggs</li>
            <li className="list-item second">Salt, to taste</li>
            <li className="list-item second">Pepper, to taste</li>
            <li className="list-item second">1 tablespoon of butter or oil</li>
            <li className="list-item second">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>

          <div className="division" />

          <h2 className="sub-title">Instructions</h2>
          <ol className="ordered-list">
            <li className="ordered-list-item">
              <b className="bold">Beat the eggs:</b>{" "}
              <span className="span">
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </span>
            </li>
            <li className="ordered-list-item">
              <b className="bold">Heat the pan:</b>{" "}
              <span className="span">
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </span>
            </li>
            <li className="ordered-list-item">
              <b className="bold">Cook the omelette:</b>{" "}
              <span className="span">
                {" "}
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li className="ordered-list-item">
              <b className="bold">Add fillings (optional):</b>{" "}
              <span className="span">
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li className="ordered-list-item">
              <b className="bold">Fold and serve:</b>{" "}
              <span className="span">
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </span>
            </li>
            <li className="ordered-list-item">
              <b className="bold">Enjoy:</b>{" "}
              <span className="span">
                Serve hot, with additional salt and pepper if needed.
              </span>
            </li>
          </ol>

          <div className="division" />

          <h2 className="sub-title">Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="table">
            <tr>
              <td>Calories</td>
              <td>
                <b className="bold table">277 kcal</b>
              </td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>
                <b className="bold table">0g</b>
              </td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>
                <b className="bold table">20g</b>
              </td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>
                <b className="bold table">22g</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
