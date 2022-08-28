import CreateContact from "./Components/CreateContact";
import "react-toastify/dist/ReactToastify.css";
import AllContacts from "./Components/AllContacts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateContact />} />
        <Route path="/allcontacts" element={<AllContacts />} />
      </Routes>
    </>
  );
}

export default App;
