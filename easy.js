import React, {Componet} from 'react';
import'/App.css';
///very easy/easy
class app extends Componet{
constructor(props)
{
super(props);
   this.state ={
        frist_name: "Ashley",
        last_name:"Lorenzo",
        age:19,
        birthdate:1-26-2003,
        number_id:8547273
   } 
}
////create render easy chanllenge 
render() 
{
     // Return JSX code
    return<div>
        <h1> {this.state.Basicinfo}</h1>
        <button>this.increament</button>
    </div>

}
}
///medium/ Hard
const basicInfo=[
    {
    frist_name:Ashley,
    last_name:Lorenzo,
    number_id:857273,
     age: 19
},
{
    frist_name: Veronica,
    last_name: cortez,
    number_id:895673,
    age:21
},
{
   frist_name:Fransica ,
   last_name:cortez,
   number_id: 7808438,
   age:20
}
];
function app(){
    return(
   <div className="App">
{basicInfo.map((basicInfo)=>(
    <div Key={basicInfo.id}>
<basicInfo name={basicInfo.frist_name} id={basicInfo.id}
 </div>
))}
</div>
    );
}
export default App;