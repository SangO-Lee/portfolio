import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";

function App() {
    return (
        <Router basename={`${process.env.PUBLIC_URL}`}>
            <Routes>
                <Route path={`/`} element={<Home />}></Route>
                <Route path={`/resume`} element={<Resume />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
