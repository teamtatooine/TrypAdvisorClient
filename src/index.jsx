import React from 'react';
import ReactDOM from 'react-dom';

import ReviewsService from './components/reviewsService.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <ReviewsService />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
