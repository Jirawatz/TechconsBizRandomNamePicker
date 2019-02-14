import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [],
      name: [],
      question: "Lorem Epsum",
      isLoading: true
  
    }
  }

   randomName(){
    let numrandom = Math.floor(Math.random() * 100) + 1;
    console.log(numrandom)
      var winnerName = this.state.data[numrandom];
    console.log(winnerName)
        console.log('state',this.state)
    }

  componentDidMount(){
    fetch('http://register.techconsbiz.com/Exhibition/api/v1/report/event/3')
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoading: true,
            data: data.data
          })
      });
  }

  
  render() {
    const { isLoading, data } = this.state;
      if(!isLoading) {
        return <div>...</div>;
      }
      else {
        {data.map(data => (
          <li key={data.data}>
            {data}
          </li>
        ))}
      //let allName = data
      
    return (
      <div>
        <div className="ui menu">
        </div>
          <div className="ui two column grid">
            <div className="eight wide column">
              <Typist 
                className="heroText"
                startDelay="1000">
                  <span>CONGRATULATIONS!</span>
                <Typist.Backspace count={16} delay={400} />
                  <span>Input</span>
              </Typist>
              <Typist 
              className="nameRenderText"
              startDelay="5000"
              >
                {this.state.question}
                </Typist>
                  <div className="heroButton">
                      <div 
                      className="ui button"
                      onClick={this.randomName()}
                      >
                      <div className="visible content">Pick a Name
                      </div>
                    </div>
                    <div 
                      className="ui button"
                      >
                      <div className="visble content">See Your Prize
                      </div>
                    </div>
              </div>
          </div>
              <div className="eight wide column">
                    <img
                    width="625px"
                    className="ui middle aligned"
                    src={require('./Images/BGHero812x.png')}></img>
                  </div>
        </div>
          <div className=""></div>
      </div>
    );
      }
  }
}

export default App;
