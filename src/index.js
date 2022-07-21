import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './config/ProtectedRoute';
import RegisterScreen from './containers/RegisterScreen';
import NoMatch from './containers/NoMatch';

import theme from "./themes";
import LoginScreen from './containers/LoginScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                           
                                <App />
                        
                        }
                    />
                    <Route
                        path="login"
                        element={
                          <ProtectedRoute loginOnly={false}>
                          <LoginScreen/>
                          </ProtectedRoute>
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <ProtectedRoute loginOnly={false}>
                                <RegisterScreen />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
