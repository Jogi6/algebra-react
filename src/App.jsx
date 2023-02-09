import { Component } from "react";
import Button from "./Button";
import Clock from "./Clock";

class App extends Component{

  state = {
    showClock: true
  }

  render () {
const {showClock} = this.state;

    return (
      <div>
        <Clock />
        <Button>
          { showClock ? "Ukloni me" : "Prikaži me"}
        </Button>
    </div>
    );
  }
}

export default App;
