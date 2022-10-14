import './App.css';
import MyComponent from `./Components/MyComponent`;
import Parent from `./Props/SomethingInteresting`;
import MilesAhead from `./States/MilesAhead`;
import Clock from `./States/Clock`;

function App() {
  return (
    <MilesAhead/>
  );
}

function ClockFace() {
  return(
    <Clock/>
  );
}
export default App;
