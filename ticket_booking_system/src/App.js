import { Form } from './components/Forms/Form'
import styles from './components/Forms/Form.module.css'
import { Routes, Route } from "react-router-dom";
import {Login} from './components/Login'
import {Register} from './components/Register'
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
