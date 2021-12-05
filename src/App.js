import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'

const App = () =>{
    return (
    <div className="tc">
        <div className="bg-light-gray">
            <h1>RoboCats</h1>
            <SearchBox/>
        </div>
        <CardList robots={robots}/>
    </div>
    )
}

export default App;