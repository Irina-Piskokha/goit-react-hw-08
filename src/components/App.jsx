import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navigation from "./Navigation/Navigation";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
