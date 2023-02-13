import { Component } from "react";

export default class EditForm extends Component{
    state = {
        text: this.props.text,
        id: this.props.id,
    }

    handleOnChange = (e) =>{
        this.setState({text: e.target.value})
    }

    sendData = (e) =>{
        const type = e.target.dataset.type
        this.props.onSave(this.state, type);
    }

    render(){
        const {text } = this.state;
        const {onCancle, type } = this.props;

        
        
        return (
            <div class="input-group">
                <input type="text" value = {text} onChange={this.handleOnChange}/>
                <button data-type={type} className="btn btn-success btn-sn" onClick={this.sendData}>&#10003;</button>
                <button className="btn btn-danger btn-sn" onClick={onCancle}>X</button>
            </div>
        );
            
    }
}