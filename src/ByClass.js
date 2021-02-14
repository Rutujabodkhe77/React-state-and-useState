
import {Component} from "react";
class ByClass extends Component
{
    // *****  state using by class      *****
state =
{
    my_info:"React",
    my_mobile:8788406776
}
// *********  usestate(function) ******************
myFunction = () =>
{
  
    alert=('hii');
    this.setState(
        {
         my_info:"Rutuja",
         my_mobile:"123"
        }
    );
}
render()
{
return(
    <div>
    <h1> Hello there its byclass js </h1>
    <h1>My Name is this {this.state.my_info} </h1>
    <h1>My Mobile Number is : {this.state.my_mobile} </h1>
    <button onClick={this.myFunction}>
        Click Here
    </button>
    </div>
);
}
}
export default ByClass;