import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import LineUp from './json/lineup.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lineup: LineUp.lineups[1]
    }
    this.returnPlayerObj = this.returnPlayerObj.bind(this)
  }
  componentDidMount() {
    axios.get('http://lineups.dev.fantech.io')
      .then(res => {
        this.setState({ lineup: res.data });
      },
      (error) => {
          this.setState({lineup: LineUp.lineups[1]});
        }
    );
  }
  returnPlayerObj(formPlace, objProp) {
    let thisPlayer = this.state.lineup.players.filter((e, i) => {
      return e.formation_place==formPlace ? e : ''
    })
    return thisPlayer[0]
  }

  render() {
    let {lineup} = this.state
    return (
      <div className="App">
        <header className="App-header">
            <h1>Team lineup and formation</h1>
        </header>
        <p className="App-intro">

        </p>
        <section>
            <div className="lineup-container">
                <h2>Lineup for the {lineup.team} </h2>
                <p>Formation: <b>{lineup.formation}</b> </p>
                <p>Players: </p>
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Formation place</th>
                      <th>Type</th>
                      <th>Position</th>
                    </tr>
                      {
                        lineup.players.map((e, i) => {
                          return(
                            <tr key={i}>
                              <td>{e.name}</td>
                              <td>{e.formation_place}</td>
                              <td>{e.type}</td>
                              <td>{e.position}</td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>
            </div>

            <div className="formation-container">
              <h2>Formation of {lineup.team} </h2>

              <section id="formation-pitch" className={'formation-'+lineup.formation}>

                  <div className="formation-row">
                    <div className="formation-item empty-item"></div>
                    <div className="formation-item player-item">{this.returnPlayerObj(1).name}, {this.returnPlayerObj(1).type}</div>
                    <div className="formation-item empty-item"></div>
                  </div>

                  {
                    //row 2
                    (lineup.formation==442 || lineup.formation==4411 ) ?
                    <div className="formation-row">
                      <div className="formation-item player-item">{this.returnPlayerObj(2).name}, {this.returnPlayerObj(2).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(5).name}, {this.returnPlayerObj(5).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(6).name}, {this.returnPlayerObj(6).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(3).name}, {this.returnPlayerObj(3).type}</div>
                    </div>
                      :
                    <div className="formation-row">
                      <div className="formation-item empty-item"></div>
                      <div className="formation-item player-item">{this.returnPlayerObj(6).name}, {this.returnPlayerObj(6).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(5).name}, {this.returnPlayerObj(5).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(4).name}, {this.returnPlayerObj(4).type}</div>
                      <div className="formation-item empty-item"></div>
                    </div>

                  }

                  {
                    //row 3
                    (lineup.formation==442 || lineup.formation==4411 ) ?
                    <div className="formation-row">
                      <div className="formation-item player-item">{this.returnPlayerObj(7).name}, {this.returnPlayerObj(7).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(4).name}, {this.returnPlayerObj(4).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(8).name}, {this.returnPlayerObj(8).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(11).name}, {this.returnPlayerObj(11).type}</div>
                    </div>
                      :
                    <div className="formation-row">
                      <div className="formation-item player-item">{this.returnPlayerObj(2).name}, {this.returnPlayerObj(2).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(7).name}, {this.returnPlayerObj(7).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(8).name}, {this.returnPlayerObj(8).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(3).name}, {this.returnPlayerObj(3).type}</div>
                    </div>

                  }

                  {
                    //row 4
                    (lineup.formation==442) ?
                    <div className="formation-row">
                      <div className="formation-item empty-item"></div>
                      <div className="formation-item player-item">{this.returnPlayerObj(10).name}, {this.returnPlayerObj(10).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(9).name}, {this.returnPlayerObj(9).type}</div>
                      <div className="formation-item empty-item"></div>
                    </div>
                      : (lineup.formation==4411) ?
                    <div className="formation-row">
                      <div className="formation-item empty-item"></div>
                      <div className="formation-item player-item">{this.returnPlayerObj(10).name}, {this.returnPlayerObj(10).type}</div>
                      <div className="formation-item empty-item"></div>
                    </div>
                    :
                    <div className="formation-row">
                      <div className="formation-item empty-item"></div>
                      <div className="formation-item player-item">{this.returnPlayerObj(10).name}, {this.returnPlayerObj(10).type}</div>
                      <div className="formation-item player-item">{this.returnPlayerObj(11).name}, {this.returnPlayerObj(11).type}</div>
                      <div className="formation-item empty-item"></div>
                    </div>

                  }

                  {
                    //row 5
                    (lineup.formation==3421 || lineup.formation==4411 ) ?
                    <div className="formation-row">
                      <div className="formation-item empty-item"></div>
                      <div className="formation-item player-item">{this.returnPlayerObj(9).name}, {this.returnPlayerObj(9).type}</div>
                      <div className="formation-item empty-item"></div>
                    </div>
                      :
                    ''

                  }






              </section>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
