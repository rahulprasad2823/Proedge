import TextField from './components/TextField';
import './App.css';
import Button from './components/Button';
import Spinner from './components/Spinner';

function App() {

  return (
    <div class="main">
     
      <div class="sec1">
      <div class="sec11"><h3 class="i1">Personal Details</h3></div>
      <div class="sec12">
      <TextField title="Firstname" class="textinput" id="c1"/>
      <TextField title="Lastname" class="textinput" id="c2"/>
      <TextField title="Mobile" class="textinput" id="c3"/>
      <TextField title="Email" class="textinput" id="c4"/>
      </div>
      </div>

      <div class="sec2">
        <div class="sec21"><h3 class="i2">Account Details</h3></div>
        <div class="sec22">
          <TextField title="Username" class="textinput"/>
          <TextField title="Password" class="textinput"/>
        </div>
        <div class="sec23">
          <Spinner title="Storage Medium" class="textinput"/>
          <Button title="Submit"/>
        </div>
      </div>
    </div>
  );
}

export default App;
