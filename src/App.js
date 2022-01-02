import Shortly from "./components/Shortly";
import {Route} from "react-router-dom";
const App = () => {
  return (
    <>
      <Route  path="/" component={Shortly} />
     
    </>
  );
};

export default App;
