import { Link, Outlet } from "react-router-dom";
import { Home, CalendarDays, Mic2, LayoutDashboard } from "lucide-react";

export default function Dashboard() {
  const menus = [
    { title: "Beranda", icon: <Home size={20} />, path: "/" },
    { title: "Create Speaker", icon: <Mic2 size={20} />, path: "/Speaker/create" },
    { title: "Create Event", icon: <CalendarDays size={20} />, path: "/Event/create" },
    { title: "Create Category", icon: <LayoutDashboard size={20} />, path: "/Category/create" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar kiri */}
      <aside className="w-64 bg-white border-r shadow-md p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav className="flex flex-col gap-2">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition"
            >
              <span className="text-blue-600">{menu.icon}</span>
              <span className="font-medium">{menu.title}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Konten kanan */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-xl shadow-md p-8 h-full w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
