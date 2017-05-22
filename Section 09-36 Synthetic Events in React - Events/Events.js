var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },

  incrementCounter: function(e) {

    console.log("Event type: " + e.type + " Counter value: " + this.state.counter);

    this.setState(function (prevState, props) {
      return {
        counter: prevState.counter + 1
      }
    });

  },

  showMessage: function() {
    console.log("Mouseover occurred: " + this.state.counter);
  },

  render: function() {
    return (
      <div>
        <div className="box">
          {this.state.counter}
        </div>
        <button className="button"
                onClick={this.incrementCounter}
                onMouseOverCapture={this.showMessage}>
                +
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('outer'));
