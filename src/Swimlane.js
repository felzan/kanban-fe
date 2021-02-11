import * as React from "react";
import './Swimlane.css';
import {Card} from "./Card";

export class Swimlane extends React.Component {

  render() {
    return (
      <div className="Swimlane">
        <h2>{this.props.title}</h2>
        <ol>
          {this.props.cards.map((card) =>
          <Card key={card.ID} title={card.title} body={card.content}/>
          )}
        </ol>
      </div>
    )
  }
}