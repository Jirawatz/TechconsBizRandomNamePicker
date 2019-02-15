import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist';

class App extends Component {
  constructor() {
    super();
    this.state ={
      data: [],
      name: [],
      question: "Lorem Epsum",
      isLoading: true,

  
    }    
  }
//RadomNameFunction (OnClick Function)
  randomName = () => {
    let numrandom = Math.floor(Math.random() * 100) + 1;
    console.log(numrandom)
      var winnerName = data[numrandom]; //data is not loading from API request (Maybe establishing a global data variable?)
    console.log(winnerName)
    console.log(this.state.data)
     }

//Fetched API
  componentDidMount(){
    fetch('http://register.techconsbiz.com/Exhibition/api/v1/report/event/3')
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoading: true,
            data: data.data
            //establish global data variable
          })
      });
  }

  // data is loaded in render section, however but not in randomName function
  render() {
    var { isLoading, data } = this.state;
      if(!isLoading) {
        return <div>...</div>;
      }
      else {
        {data.map(data => (
          <li key={data.data}> 
            {data}
          </li>
        ))
        this.setState({
          data: data
        });
      }
      }

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
                  <span>{this.state.name}</span>
              </Typist>
              <Typist 
              className="nameRenderText"
              startDelay="5000"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typist>
                  <div className="heroButton">
                      <div 
                      className="ui button"
                      onClick={this.randomName()} 
                      >
                      {/* Recall this.randomName indirectly to prevent indefinite loop of setState and DOM rendering */}
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
                    alt="BGHero"
                    src={require('./Images/BGHero812x.png')}></img>
                  </div>
        </div>
          <div className=""></div>
      </div>
    );
      }
  }

export default App;
