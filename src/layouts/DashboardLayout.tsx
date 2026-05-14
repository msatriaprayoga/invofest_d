import { Link, Outlet, useNavigate} from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout(){

    const logout = useAuthStore((state) => state.logout )
    const navigate = useNavigate();
    

    // fungsi logout
    const handleLogout = () => {
        logout();

        navigate("/login");
        
    };

    return(
        <div className="flex w-full min-h-screen">
            {/* kiri */}
            <div className="bg-red-900 w-64 flex flex-col justify-between p-4">

                <div className="border-b border-gray-50 py-4">
                    <h1 className="font-bold text-2xl text-center text-white">INVOFEST</h1>
                </div>

                <div>
                    <nav className="flex flex-col gap-2 w-full text-white text-lg transition ease-in duration-150">
                        <Link to="/dashboard" className="block px-4 py-2 rounded-lg hover:bg-amber-700" > Dashboard </Link>
                        <Link to="/dashboard/category" className="block px-4 py-2 rounded-lg hover:bg-amber-700" > Category </Link>
                        <Link to="/dashboard/speaker" className="block px-4 py-2 rounded-lg hover:bg-amber-700" > Speaker </Link>
                        <Link to="/dashboard/event" className="block px-4 py-2 rounded-lg hover:bg-amber-700" > Event </Link>
                    </nav>
                </div>
                <div>
                    <button 
                    type="button" 
                    onClick={handleLogout}
                    className="w-full p-4 bg-amber-700 text-white font-semibold rounded-2xl cursor-pointer hover:bg-red-900">
                        Logout
                    </button>
                </div>
          
            </div>
            {/* KANAN */}
            <div className="bg-white p-4 w-full">
                <Outlet/>
            </div>
         
        </div>

    );
}