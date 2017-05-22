var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },

  incrementCounter: function(e) {

    var increment = 1;

    if (e.shiftKey) {
      increment = 10;
    }

    if (e.altKey) {
      increment = 100;
    }

    this.setState(function(prevState, props) {
      return {
        counter: prevState.counter + increment
      }
    }

  )},

  render: function() {
    return (
      <div>
        <div className="box">
          {this.state.counter}
        </div>
        <button className="button"
                onClick={this.incrementCounter}>
                + (Can use Alt or Shift keys)
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('outer'));
