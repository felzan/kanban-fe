import './Kanban.css';
import {Board} from "./Board";
import * as React from "react";

export class Kanban extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cards: {},
      titleValue: '',
      contentValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeContent = this.handleChangeContent.bind(this)
  }

  componentDidMount() {
    this.fetchCards()
  }

  handleChangeTitle(event) {
    this.setState({
      titleValue: event.target.value
    })
  }

  handleChangeContent(event) {
    this.setState({
      contentValue: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    this.state.cards.todo.push({
      ID: 9,
      title: this.state.titleValue,
      content: this.state.contentValue
    })
    this.setState({
      cards: this.state.cards
    })
  }

  render() {
    return (
      <div className="Kanban">
        <header className={"Kanban-header"}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="title" onChange={this.handleChangeTitle}/>
            <textarea onChange={this.handleChangeContent} />
            <input type="submit" value="Add" />
          </form>
        </header>
        <Board cards={this.state.cards}/>
      </div>
    );
  }

  fetchCards() {
    fetch("http://localhost:8080/api/v1/cards")
    .then(res => res.json())
    .then((result) => {
      this.setState({
        cards: result
      })
    })
  }
}