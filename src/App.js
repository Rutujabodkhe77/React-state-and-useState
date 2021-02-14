import User from './User.js';
import ByClass from './ByClass.js';
// import './App.css';

function App() {
  return (
    <div>
           <h1>Hey Testing here (prog)</h1>

          <User></User>

          <User name="Rutuja" age="21"></User>
          <User name="Tanuja" age="15">
            My fav Prog is React 
          </User>
          {/* from ByClass file */}
<h1>This is APP.js with functin</h1>
     </div>
  );
}

  export default App;
