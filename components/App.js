import React,{Component} from 'react';
//component is not actual defaul for react library

//create class app which extends component from react
import {Form, FormControl,Button} from 'react-bootstrap';
class App extends Component{
    constructor(){
        super();
        this.state={
            text: ''//update text
        }
    }
render(){
    return(
        <div>
            <h2> Note to Self</h2>
            <Form inline>
                <FormControl onChange={event=>this.setState({text: event.target.value})}/>
                {' '}
                <Button onClick={()=>console.log(this.state)}>Submit </Button>
                </Form>
            </div>
    )
}
}
export const color='blue';
export const number = 26;
//to be imported by other files
export default App;