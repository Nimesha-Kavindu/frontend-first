import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-screen bg-gray-400 flex flex-row">
            <div className="h-screen w-[300px]  bg-blue-900">
                <Link to="/adminpage/products" className="text-white block p-4 hover:bg-blue-700">Products</Link>
                <Link to="/adminpage/users" className="text-white block p-4 hover:bg-blue-700">Users</Link>
                <Link to="/adminpage/orders" className="text-white block p-4 hover:bg-blue-700">Orders</Link>
                <Link to="/adminpage/settings" className="text-white block p-4 hover:bg-blue-700">Settings</Link>
                <Link to="/adminpage/logout" className="text-white block p-4 hover:bg-blue-700">Logout</Link>


            </div>
            <div className="h-screen w-[calc(100%-300px)] bg-red-900">
                <Routes path='/*'>
                    <Route path="/products" element={<p className="text-white">Products Page</p>} />
                    <Route path="/users" element={<p className="text-white">Users Page</p>} />
                    <Route path="/orders" element={<p className="text-white">Orders Page</p>} />
                    <Route path="/settings" element={<p className="text-white">Settings Page</p>} />
                    <Route path="/logout" element={<p className="text-white">Logout Page</p>} />
                </Routes>
            </div>
        </div>
    );
}