import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Renew from "./routes/Renew";
import "./assets/css/common.scss";

function App() {
    return (
        <>
            <Router basename={`${process.env.PUBLIC_URL}`}>
                <Routes>
                    <Route path={`/`} element={<Home />}></Route>
                    <Route path={`/resume`} element={<Resume />}></Route>
                    <Route path={`/renew`} element={<Renew />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
