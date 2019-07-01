import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header.js';
import Addtodo from './components/Addtodo.js';
//import uuid from 'uuid'
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {

  state = {
    todos: [
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //Delete todos
  delTodo = (id) => {
    //this.setState({
    //  todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //})

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter( todos => todos.id !== id )] }));
  }




  //Add todos
  addTodo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, completed: false
      })
      .then(
        res => this.setState({
          todos: [...this.state.todos, res.data]
        })
      ) 
      
      /*  OLD VERSION (no online json placeholder)
      addTodo = (title) => {
        const newTodo = {
          id: uuid.v4(),
          title,
          completed: false
        }
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      }
      */
    }


  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header />

          <Route exact path="/" render={ props => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />

          <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
      
    );
  }
}

export default App;
