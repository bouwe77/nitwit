import React from "react";

class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render = () => {
    return (
      <div className="compose">
        <form onSubmit={this.handleSubmit}>
          <div className="form-text">
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Write something..."
            />
          </div>
          <div className="form-button">
            <button type="submit">OK</button>
          </div>
        </form>
      </div>
    );
  };
}

export default Compose;