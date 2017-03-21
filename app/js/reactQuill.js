var React = require('react');
import ReactDOM from 'react-dom'
var ReactQuill = require('react-quill');
 
var MyReactQuill = React.createClass({

  getInitialState(){
    return{
        value:"<div>apple</div>",
        text:''
    }
  },

  onTextChange: function(value) {
    console.log(value)
    this.setState({ text:value });
  },
 
  render: function() {
    return (
      <ReactQuill 
        theme="snow"
        ref='MyReactQuill'
        value={this.state.text}
        onChange={this.onTextChange}
        defaultValue="<div>appletests</div>"
        formats={[
              "list",
              "bullet",
              "italic",
              { name: "h1", tag: "H1", prepare: "heading", type: "line" },
              { name: "h2", tag: "H2", prepare: "heading", type: "line" },
              { name: "h3", tag: "H3", prepare: "heading", type: "line" }
            ]}
         />
    );
  }
});


ReactDOM.render(
    <MyReactQuill />,
    document.getElementById('main')
);