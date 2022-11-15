import React from "react";

import styledList from "./List.module.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className={styledList.person} key={id}>
            <img className={styledList["person-img"]} src={image} alt={name} />
            <div>
              <h4 style={{ marginBottom: "0.35rem", fontSize: "0.875rem" }}>
                {name}
              </h4>
              <p className={styledList["person-age"]}>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
