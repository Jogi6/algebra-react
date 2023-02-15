import {useState} from "react"

const EditForm = (props) => {
    const [text, setText] = useState(props.text);

    const handleOnChange = (e) =>{
        setText(e.target.value);
    }

    const sendData = (e) =>{
        const data = {
            id: props.id,
            text: text
        }

        if (e.type === "click" || e.key === "Enter") {
            const type = e.target.dataset.type;
            props.onSave(data, type);
            props.onCancle();
        }

        if (e.key === "Escape") {
            props.onCancle();
        }
    }

    return (
        <div class="input-group">
                <input data-type={props.type} 
                        type="text" 
                        value = {text} 
                        className="form-control" 
                        onChange={handleOnChange} 
                        onKeyUp={sendData} autoFocus />
                <button data-type={props.type} 
                        className="btn btn-success btn-sn" 
                        onClick={sendData}>
                            &#10003;
                </button>
                <button className="btn btn-danger btn-sn" 
                        onClick={props.onCancle}>
                            X
                </button>
            </div>
    )

}

export default EditForm;