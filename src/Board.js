import './Board.css';
import {Swimlane} from "./Swimlane";
import * as React from "react";

export class Board extends React.Component {

  render() {
    const cards = this.props.cards
    if (cards === undefined || cards.todo === undefined) {
      return <h2>Loading...</h2>
    } else {
      return (
        <div className="Board">
          <Swimlane title={'To do'} cards={cards.todo}/>
          <Swimlane title={'Doing'} cards={cards.doing}/>
        </div>
      )
    }
  }
}