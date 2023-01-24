import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
