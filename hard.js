import React, {Componet} from 'react';
import'/App.css';


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
{ this.statebasicInfo.map((basicInfo)=>(
    <div Key={basicInfo.id}>
<basicInfo name={basicInfo.frist_name} id={basicInfo.id}
 </div>
))}
</div>
    );
}
export default App;