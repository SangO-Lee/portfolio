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
                    <Route path={`/`} element={<Renew />}></Route>
                    <Route path={`/resume`} element={<Resume />}></Route>
                    <Route path={`/2023`} element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
