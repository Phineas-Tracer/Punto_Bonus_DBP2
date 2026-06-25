import { Link } from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    onLogout: () => void;
}

export default function Sidebar({ isOpen, onLogout }: SidebarProps) {
    if (!isOpen) return null;
    return(
        <div className="w-64 bg-gray-100 h-full p-4 shadow-lg">
            <nav className="flex flex-col gap-4">
                <Link to="/search">
                    Search Flights
                </Link>

                <Link to="/bookings">
                    My Booked Flights
                </Link>

                <button 
                onClick={onLogout}
                className="text-red-600 text-left"
                >
                    Logout
                </button>
            </nav>
        </div>
    )
}