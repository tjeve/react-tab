const HelloWorld = function() {
  return (<h1>Hello World!</h1>)
}

const List = function(props) {
  return (<div>
    <p>This is {props.name}'s list of things to do!</p>
    <ul><li>
      </li></ul>
  </div>)
}

const Hello = function(props) {
  return (<div>
    <h1>Hello, {props.name}</h1>
    <List name={props.name}/>
  </div>)
}

class Counter extends React.Component {
  state = {
    count: 0
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleToggle = () => {
    //This is one way to write the color change function
    // const color = (this.state.color === 'blue') ? "green" : "blue";

    let color = 'blue'
    if (this.state.color === 'blue') {
      color = 'green'
    }
    this.setState ({
      color: color,

    })
  }
  render() {     // render is an important function and must be called on the parent
    console.log(this.state)
    const style = {
      color: this.state.color
    }
    return (<div>
      <h1 style={style}>Team: {this.props.name}</h1>
      {/* <List name={this.props.name}/> */}
      <h5>Your Score is {this.state.count} </h5>
      <button onClick={this.handleAdd}>Add</button>
      <button onClick={this.handleToggle}>Toggle Color</button>
    </div>)
  }
}

const App = function() {
  return (<div>
    {/* <Hello name="Banana"/>
    {Hello({name: "Banana1"})} */}
    <Counter name="Galileo"/>
    <Counter name="Wegener" />
    <Counter name="Newton" />
    <Counter name="Franklin" />
    <Counter name="Bohr" />
    <Counter name="Darwin" />
    <Counter name="Hubble" />
    
  </div>)
}

//The App gets rendered here. Put anything you want to render in the App function
ReactDOM.render(<App name="Terrence" />, document.getElementById('root'))