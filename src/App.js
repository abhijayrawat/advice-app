import React from "react";
import axios from "axios";
import "./App.css";


class App extends React.Component {
    state = {
        advice: ' '
    };

    componentDidMount() {
        // axios.get('https://api.adviceslip.com/advice')

        // console.log('componentDidMount');
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            // console.log(response);
            const { advice } = response.data.slip;
            console.log(advice);

            this.setState({ advice});
        })
        .catch((error) => {
            console.log(error);
        });
    }

  render() {
    const { advice } = this.state;
    return (
    //   <div>
    //     <h1>{advice}</h1>
    //   </div>
    <div className="app">
        <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
                <span>Give me advice!</span>
            </button>
        </div>
    </div>
    );
  }
}

export default App;