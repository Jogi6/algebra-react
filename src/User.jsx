import { Component } from "react";
import EditForm from "./EditForm";
import UsersContext from "./UsersContext";

export default class User extends Component{
    state = {
        isEditName: false,
        isEditSurname: false,
        isEditAge: false,
    }
    userClickOnField(e){
        console.log(e);
    }

    handleChangeEditName = () => {
        this.setState({ isEditName: !this.state.isEditName})
    }
    handleChangeEditSurname = () => {
        this.setState({ isEditSurname: !this.state.isEditSurname})
    }
    handleChangeEditAge = () => {
        this.setState({ isEditAge: !this.state.isEditAge})
    }

    render(){
        const {index, user } = this.props;
        const {isEditName, isEditSurname, isEditAge} = this.state;
        return (
            <UsersContext.Consumer>
                {
                    (value) =>{
                        return (
                            <tr>
                                <th>{index}.</th>
                                <th>
                                    {!isEditName && (
                                        <span className="link-primary" onClick={this.handleChangeEditName}>
                                            {user.ime}
                                        </span>
                                    )}
                                    {isEditName && <EditForm text={user.ime} type="ime" id={user.id} onCancle={this.handleChangeEditName} onSave={value.onSave} />}
                                </th>
                                <th>
                                    {!isEditSurname && (
                                        <span className="link-primary" onClick={this.handleChangeEditSurname}>
                                            {user.prezime}
                                        </span>
                                    )}
                                    {isEditSurname && <EditForm text={user.prezime} type="prezime" id={user.id} onCancle={this.handleChangeEditSurname} onSave={value.onSave} />}
                                </th>
                                <th className="text-center">
                                    {!isEditAge && (
                                        <span className="link-primary" onClick={this.handleChangeEditAge}>
                                            {user.dob}
                                        </span>
                                    )}
                                    {isEditAge && <EditForm text={user.dob} type="dob" id={user.id} onCancle={this.handleChangeEditAge} onSave={value.onSave} />}
                                </th>
                            </tr>
                        )
                    }
                }
            </UsersContext.Consumer>
        );
    }
}