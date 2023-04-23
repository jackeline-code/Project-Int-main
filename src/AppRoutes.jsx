import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Loading } from "./components/Loading";
import { AuthProvider, AuthContext } from "./contexts/auth";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { ListPage } from "./pages/ListPage";

export const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <Loading />
        }

        if(!authenticated) {
            return <Navigate to="/login" />; 
        }

        return children;
    };
    
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LandingPage />} />
                    <Route exact path="/" element={<Private><HomePage /></Private>} />
                    <Route exact path="/pets" element={<Private><ListPage /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}
