import React from "react";
import PropTypes from "prop-types";
import AddPageAction from "./AddPageAction";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onBodyHandler = this.onBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onBodyHandler(e) {
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Judul Catatan..."
          value={this.state.title}
          onChange={this.onTitleHandler}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder="Isi Catatan..."
          contentEditable={true}
          onInput={this.onBodyHandler}
        ></div>
        <AddPageAction />
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
