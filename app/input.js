import React from 'react';
import ReactDOM from 'react-dom'

// var InputComponent = React.createClass({
//     getInitialState: function() {
//         return {seconds: 0};
//     },

//     render: function() {
//         return (
//             <input type="text"
//                     defaultValue = "hello world" />
//         );
//     }
// });


var Radio = React.createClass({
    // getInitialState:function(){
    //     return({
    //         value:this.props.value
    //     })
    // },

    handleChange(event){
        if(this.props.onChange){
            this.props.onChange(event)
        }

        // this.setState({
        //     value:event.target.value
        // })

        console.log(event.target.value)
    },

    render(){
        var children =[];
        var value = this.props.value;

        this.props.children.map((child,index)=>{
            children.push(
                <label key={index}>
                    <input
                        key = {index}
                        type="radio"
                        name={child.props.name}
                        value={child.props.value}
                        checked={child.props.value == value}
                        onChange = {this.handleChange} />

                        {child.props.children}
                        <br />
                </label>
            )
        })

        return (<span>{children}</span>)
    }
})



var MyForm = React.createClass({
    getInitialState(){
        return({
            my_radio:"C"
        })
    },

    handleChange(event){
        this.setState({
            my_radio:event.target.value
        })
    },

    submitHandle:function(event){
        event.preventDefault();
        alert(this.state.my_radio)
    },

    render(){
        return(
            <form onSubmit={this.submitHandle}>
                <Radio ref='radio' name="my_radio" value={this.state.my_radio} onChange={this.handleChange}>
                    <option value="A"> first radio </option>
                    <option value="B"> second radio </option>
                    <option value="C"> third radio </option>
                    <option value="four"> fourth radio </option>
                </Radio>
                <button type="submit">speak</button>
            </form>
        )
    }
})

ReactDOM.render(
    <MyForm />,
    document.getElementById('main')
);



