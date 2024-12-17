import "./App.css";
import Form from "./Components/Form";
import IncreDecre from "./Hooks/IncreDecre";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import UseRef from "./Hooks/UseRef";
import SelectorDispatch from "./Redux/SelectorDispatch";

function App() {
  return (
    <>
      <Form />
      <hr />
      <IncreDecre />
      <hr />
      <UseEffectAPI />
      <hr />
      <SelectorDispatch />
      <hr />
      <UseRef />
    </>
  );
}

export default App;
