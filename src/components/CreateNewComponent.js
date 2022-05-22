import React from "react";
import Icon from "@material-ui/core/Icon";
import FuncButton from "./FuncButton";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import styled from "styled-components";
import InputForm from "./InputForm";

class CreateNewComponent extends React.PureComponent {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }
    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addCard(listID, text));
    }
  };


  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <InputForm
        list={list}
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <FuncButton onClick={list ? this.handleAddList : this.handleAddCard}>
          {list ? "Додати список" : "Додати картку"}
        </FuncButton>
      </InputForm>
    ) : (
      <OpenForm list={list} onClick={this.openForm}>
        {list ? "Додати новий список" : "Додати нову картку"}
      </OpenForm>
    );
  }
}

const OpenForm = ({ list, children, onClick }) => {
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
  const OpenFormButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: ${buttonTextOpacity};
    color: ${buttonTextColor};
    background-color: ${buttonTextBackground};
  `;

  return (
      <OpenFormButton onClick={onClick}>
        <Icon>add</Icon>
        <p style={{ flexShrink: 0 }}>{children}</p>
      </OpenFormButton>
  );
};


export default connect()(CreateNewComponent);


