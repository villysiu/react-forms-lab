import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    console.log(props.maxChars)
    this.state = {
      maxChars: props.maxChars,
      value: ''
    }
  }

  handleChange = (event) => {
    let v = event.target.value
   this.setState(
      previousState => {
        return {
          maxChars: previousState.maxChars - 1,
          value: v
        }
      }
      
  
  
  );

  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} name="message" id="message" />
        remaining caracters: {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
