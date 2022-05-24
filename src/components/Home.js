import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";
import Button from "@material-ui/core/Button";

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
      <Thumbnail>
        <Title>{title}</Title>
      </Thumbnail>
  );
};
const Home = ({ boards, boardOrder, dispatch }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };

  const handleDeleteBoards = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };


  const renderBoards = () => {
    return boardOrder.map(boardID => {
      const board = boards[boardID];

      return (
        <Link
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardThumbnail {...board} />
        </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <CreateTitle>Створіть нову дошку!</CreateTitle>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Введіть заголовок нової дошки..."
          type="text"
        />
      </form>
    );
  };

  return (
      <div>
        <StyledButton onClick={handleDeleteBoards}>Видалити всі дошки</StyledButton>
        <HomeContainer>
          <Thumbnails>{renderBoards()}</Thumbnails>
          {renderCreateBoard()}
        </HomeContainer>
      </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);




const Thumbnail = styled.div`
  height: 180px;
  width: 280px;
  background: #ffffff;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: #000000;
`;

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: white;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: -100px;
    color: black;
    background: #ffffff;
  }
`;