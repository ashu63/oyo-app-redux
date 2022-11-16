import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CheckIn from "./pages/CheckIn";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import ViewHotel from "./pages/ViewHotel";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Payment from './pages/Payment'

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <SignUp />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/search/viewHotel">
              <ViewHotel />
            </Route>
            <Route exact path="/search/viewHotel/checkIn">
              <CheckIn />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
