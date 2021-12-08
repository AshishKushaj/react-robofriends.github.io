import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

 

class App extends React.Component{

    constructor()
    {
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(ans =>{
            return ans.json();
        }).then( user =>{
            this.setState({robots:user})
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield :event.target.value});
        
    }
 
    render()
    {
        const {robots , searchfield} = this.state;

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <div>
                    <h1 className="f1">RoboCats</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>

                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>

            </div>
            )

    }
    
}

export default App;