import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import LoginScreen from "./containers/LoginScreen";
import Navbar from "./containers/Navbar";
import RegisterScreen from "./containers/RegisterScreen";
import ProfileScreen from "./containers/ProfileScreen";
import { ThemeProvider } from "@mui/material";
import themes from "./themes";
import HomeScreen from "./containers/HomeScreen";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Navbar />
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <ProfileScreen /> */}
        <HomeScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
