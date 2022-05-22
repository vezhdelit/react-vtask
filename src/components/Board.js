import React, { PureComponent } from "react";
import TasksList from "./TasksList";
import { connect } from "react-redux";
import CreateNewComponent from "./CreateNewComponent";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sort, setActiveBoard } from "../actions";
import { Link } from "react-router-dom";


class Board extends PureComponent {
  componentDidMount() {
    // set active trello board here
    const { boardID } = this.props.match.params;

    this.props.dispatch(setActiveBoard(boardID));
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists, cards, match, boards } = this.props;
    const { boardID } = match.params;
    const board = boards[boardID];
    if (!board) {
      return <p>Board not found</p>;
    }
    const listOrder = board.lists;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <StyledLink to="/">Назад</StyledLink>
        <h2>{board.title}</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* eslint-disable-next-line array-callback-return */}
              {listOrder.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = list.cards.map(cardID => cards[cardID]);

                  return (
                    <TasksList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <CreateNewComponent list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards
});

export default connect(mapStateToProps)(Board);



const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: black;
    background: white;
    height: 30px;
    width: 60px;
    padding: 10px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
  }
`;
