import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    element={<Home />}
                ></Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/resume`}
                    element={<Resume />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
