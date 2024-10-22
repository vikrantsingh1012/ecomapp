import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import NewLayout from './components/NewLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLayout />}>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

