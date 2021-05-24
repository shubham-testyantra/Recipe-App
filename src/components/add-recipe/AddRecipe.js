import React, { useState } from "react";

function AddRecipe() {
  const [dish, setDish] = useState("");
  const [Items, setItems] = useState([]);
  const setDishName = (e) => {
    setDish(e.target.value);
  };

  const AddRecipe = (e) => {
    setItems((oldItems) => {
      return [...oldItems, dish];
    });
    setDish("");
  };

  return (
    <div className="container my-5 mx-auto  col-md-12">
      <div className="pt-3 d-flex col-md-5">
        <input
          class="form-control col-md-3 py-2 "
          type="search"
          placeholder="Add Recipe Name..."
          aria-label="Search"
          name="recipe-name"
          value={dish}
          onChange={setDishName}
        />
        <button
          class="btn btn-danger btn-outline-danger text-dark"
          type="submit"
          onClick={AddRecipe}
        >
          Add
        </button>
      </div>
      <div class="list-group mt-5 col-md-6">
        <ul class="list-group list-group-flush fw-bold text-center">
          <li class="list-group-item list-group-item-action py-3">
            Paneer Butter Masala
          </li>
          <li class="list-group-item list-group-item-action py-3">
            Moong Dal Halwa
          </li>
          {Items.map((dishValue) => {
            return (
              <li class="list-group-item list-group-item-action py-3">
                {dishValue}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddRecipe;
