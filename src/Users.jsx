import { Component } from "react";
import User from "./User";

export default class Users extends Component{
    // users = this.props.users //dostupan svugdje
    render(){
        const {users, onSave} = this.props; //Dostupan samo unutar rendera
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>R.br</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th className="text-center">Godine</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=> <User user={user} key={user.id} index={index + 1} onSave={onSave}/>)}
                </tbody>
            </table>
        );
    }
}