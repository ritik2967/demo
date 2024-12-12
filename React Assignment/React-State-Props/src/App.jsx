import Greetings from "./Components/Greetings";
import Introduction from "./Components/Introduction";
import JSXML from "./Components/JSXML";
import UserCard from "./Components/UserCard";

function App() {
  return (
    <>
      <Introduction />
      <JSXML />
      <Greetings name="Rutvik" />
      <UserCard name="Tops Technology" age={15} location="SG Highway" />
    </>
  );
}

export default App;
