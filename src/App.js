import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"black"}/>
        <PersonCard firstName={"Smith"} lastName={"Jon"} age={88} hairColor={"brown"}/>
        <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"brown"}/>
        <PersonCard firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"blonde"}/>
    </div>
  );
}

export default App;
