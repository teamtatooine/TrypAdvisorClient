import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import TripPlanner from './TripPlanner.jsx';
import Info from './Info.jsx';
import data from '../../sample_data.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //view: 'lines',
      info: [],
      id: 100//data.sampleLines
      //stops: data.sampleStopList.stops
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
  }
componentDidMount() {
  //let finalLinesData = [];
  //console.log("This is state of info", this.state.info);
  $.get('http://localhost:3000/api/100/overview', function(data) {
  }).done(data => {
    //console.log("data from server for lines",data);
    //let orgLinesData = data;
    this.setState({
      info: data
     });
  })
}
  changeView(view) {
    this.setState({
      view: view
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log("submit event value",event.value);
    console.log("id submit", this.state.id);
    var id = this.state.id;
    console.log("id from state", id);
    $.get('http://localhost:3000/api/'+id + '/overview', function(data) {
    }).done(data => {
      console.log("submit data", data);
      this.setState({
       info: data
      });
    })
  }

  // componentDidUpdate(this.state.id) {
  //   if(this.state.id !== this.state.id)
  // }

  handleChangeId(event) {
    event.preventDefault();
    console.log("I am here inside onchange");
    console.log("e",event.target);
    this.setState({id: event.target.value});
    console.log("id",this.state.id);
  }

  render() {
    //console.log("data.sampleLines",this.state.lines);
    //console.log("lines",this.state.lines);
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Search from 1 to 100 for attractions
            <input type="text" value={this.state.id} onChange={this.handleChangeId} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Info info = {this.state.info[0]}/>
      </div>
    );
  }
}
export default Overview;

//ReactDOM.render(<App />, document.getElementById('app'));

