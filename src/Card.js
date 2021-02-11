import * as React from "react";
import './Card.css';

export class Card extends React.Component{

  render() {
    return (
      <div className="Card">
        <h3>{this.props.title}</h3>
        <p>
          {this.props.body}
        </p>
      </div>
    )
  }
}