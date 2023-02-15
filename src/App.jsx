import { Component } from "react";
import Users from "./Users";
import UsersContext from "./UsersContext";

class App extends Component{

  state = {
    users: [
      {
        id: 1,
        ime: "Branko",
        prezime: "Branković",
        dob: 32,
      },
      {
        id: 2,
        ime: "Janko",
        prezime: "Janković",
        dob: 42,
      },
      {
        id: 3,
        ime: "Stanko",
        prezime: "Stanković",
        dob: 52,
      },
    ]
  };

  saveChanges = (data, type) =>{
    const {users} = this.state
    const userIndex = users.findIndex((user) => data.id == user.id);
    users[userIndex][type] = data.text;
    this.setState({users: users});
  }

  contextData = {
    onSave: this.saveChanges
  }

  componentDidUpdate = () =>{
    // poslati podatke iz statea na spremanje u bazu podataka
  }

  render () {
    const {users} = this.state;

    return (
      <div className="container">
        <UsersContext.Provider value={this.contextData}>
          <Users users={users} />
        </UsersContext.Provider>
      </div>
    );
  }
}

export default App;