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
        if (e.type === "click" || e.key === "Enter") {
            const type = e.target.dataset.type;
            this.props.onSave(this.state, type);
            this.props.onCancle();
        }

        if (e.key === "Escape") {
            this.props.onCancle();
        }
    }

    render(){
        const {text } = this.state;
        const {onCancle, type } = this.props;

        return (
            <div class="input-group">
                <input data-type={type} 
                        type="text" 
                        value = {text} 
                        className="form-control" 
                        onChange={this.handleOnChange} 
                        onKeyUp={this.sendData} autoFocus />
                <button data-type={type} 
                        className="btn btn-success btn-sn" 
                        onClick={this.sendData}>
                            &#10003;
                </button>
                <button className="btn btn-danger btn-sn" 
                        onClick={onCancle}>
                            X
                </button>
            </div>
        );
            
    }
}