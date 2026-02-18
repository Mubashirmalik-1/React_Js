import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <section className="section">
        <img src={props.img} width={400} />
        <div className="heading">
          <h2>{props.title}</h2>
          <p>{props.bio}</p>
        </div>
        <p>{props.data}</p>
        <button>Read More</button>
      </section>
    </div>
  );
};

export default Card;
