import React from "react";

class Box extends React.Component {
  render() {
    const { name, type, image, averageWeight } = this.props.pokemon;
    const altImage = `Image ${name}`;
    return (
      <section className="box-pokemon">
        <div>
          <h4>{name}</h4>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt={altImage}></img>
        </div>
      </section>
    );
  }
}

export default Box;
