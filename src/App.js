import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import LoginScreen from "./containers/LoginScreen";
import Navbar from "./containers/Navbar";
import RegisterScreen from "./containers/RegisterScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
    </div>
  );
}

export default App;
