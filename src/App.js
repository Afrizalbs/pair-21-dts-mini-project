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
import Footer from "./containers/Footer";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <div className="App">
                <Navbar />
                <HomeScreen />
                <Footer/>
            </div>
    </ThemeProvider>
  );
}

export default App;
