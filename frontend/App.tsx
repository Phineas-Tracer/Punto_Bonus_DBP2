import { BrowserRouter, Routes, Route, Navgate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SearchFlights from "./pages/SeacrhFlights";
import BookFlight from "./pages/BookDetails";
import MyBooking from "./pages/MyBookings";

function App() {
    const isAuthenticated = true;
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard/> : <Navigate to="/" />} />
                <Route path="/search-flights" element={isAuthenticated ? <SearchFlights/> : <Navigate to="/" />} />
                <Route path="/book-flight" element={isAuthenticated ? <BookFlight/> : <Navigate to="/" />} />
                <Route path="/my-bookings" element={isAuthenticated ? <MyBooking/> : <Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;