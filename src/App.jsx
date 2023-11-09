import Vlog from "./components/Vlog/Vlog";
import "./App.scss";

import WhereToFind from "./components/WhereToFind/WhereToFind";
import CustomerComments from "./components/CustomerComments/CustomerComments";
function App() {
  return (
    <div>
      <Vlog />
      <WhereToFind />
      <CustomerComments />
    </div>
  );
}

export default App;
