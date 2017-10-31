import React,{Component} from 'react';
//component is not actual defaul for react library

//create class app which extends component from react
class App extends Component{
render(){
    return(
        <div>
            <h2> Note to Self</h2>
            </div>
    )
}
}
export const color='blue';
export const number = 26;
//to be imported by other files
export default App;