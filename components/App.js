import React,{Component} from 'react';
//component is not actual default for react library

//create class app which extends component from react
import {Form, FormControl,Button} from 'react-bootstrap';
import Note from './Note';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
const cookie_key= 'NOTES';
//regular function
//function roar(message){
  //  console.log(message);
//}
//arrow function
//arrow function doesn't create its own this object...it just refers to this of the parent object or object around it
const roar=(message)=>{
   console.log(message);
}
roar('roarr!');
class App extends Component{
    constructor(){
        super();
        this.state={
            text: '',//update text
            notes:[]
        }
    }
    componentDidMount(){
        // const notes= read_cookie(cookie_key);
        // this.setState({notes});
        this.setState({notes: read_cookie(cookie_key)});
    }

clear(){
    delete_cookie(cookie_key);
    this.setState({notes: []});
}

    //submit helper function
    submit(){
    //  const notes= this.state.notes;
    //  const newnote = {text:this.state.text};
    //  //newnote object
    //  notes.push(newnote);
    //  this.setState({notes : notes});

    //Destructuring objects : code improvement
  const { notes, text}=this.state; //variable notes is same in left hand and right hand side..create own local variabe of same name
  // const newnote={text:text}; //key and value are same hence remove key
 // const newnote={text};
 // notes.push(newnote);
 notes.push({text})
  this.setState(notes);
  bake_cookie(cookie_key, this.state.notes);
}
render(){
    return(
        <div>
            <h2> Note to Self</h2>
            <Form inline>
                {/* <FormControl onChange={event=>this.setState({text: event.target.value})}/> */}
                <FormControl onChange={function(event) {this.setState({text: event.target.value})}.bind(this)}/>
                {' '}
                <Button onClick={()=>this.submit()}>Submit </Button>
                </Form>
                {this.state.notes.map((note, index) =>{
                 return(
                    // <div key={index}>{note.text}</div>
                    <Note key={index} note={note} />
                 )
                })
                }
                <hr/>
                <Button onClick={()=>{this.clear()}}>Clear </Button>
            </div>
    )
}
}
export const color='blue';
export const number = 26;
//to be imported by other files
export default App;