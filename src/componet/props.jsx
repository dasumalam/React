import React from "react";

function Card ({name,some, yes="some",no,}) {
  return (
    <div className="card border w-fit p-3 mx-auto mt-10">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
        alt="lizard"
        className="card-img h-30 w-40 flex mx-auto "
      />

      <div className="card-content">
        <h2>{name}</h2>
        <p className="w-60">
         {some}
        </p>

        <div className="card-actions">
          <button className="btn border p-2">{yes}</button> &nbsp;
          <button className="btn border p-2">{no}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;