function Numbers(props) {

  var numberList = [];

  for (var i = 1; i < props.upto; i++) {
    numberList.push(props.children(i));
  }

  return <div>{numberList}</div>;
}

function List (props) {
  return (
    <Numbers upto={props.upto}>
      {  (index) => <div key={index}> {index} </div>  }
    </Numbers>
  );
}

ReactDOM.render(<List upto={10}/>, document.getElementById('outer'));

// function CalculateTip(props) {
//
//   var bill = props.bill;
//   var percentage = props.percentage/100;
//   var tip = bill * percentage;
//
//   return <div>A {props.percentage}% tip on ${bill} = ${tip}.</div>;
// }
//
// function RestaurantTip (props) {
//   return (
//     <CalculateTip bill={props.bill} percentage={props.percentage}>
//
//     </CalculateTip>
//   );
// }
//
// ReactDOM.render(<RestaurantTip bill={100.00} percentage={15}/>, document.getElementById('outer'));
