function Todo(props) {
  return <div>TODO: {props.item}</div>
}

function List(props) {

  var list = ['clean car', 'finish email', 'do groceries'];

  return (
    <ul>
      {list.map(  (todo) => <Todo key={todo} item={todo}/>  )}
    </ul>
  );

}

ReactDOM.render(<List/>, document.getElementById('outer'));
