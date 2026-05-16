import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const role = user?.role;

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <p className="mt-2">Name: {user?.name}</p>

            <p>Role: {user?.role}</p>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <hr className="my-6" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            to="/products"
            className="bg-black text-white p-4 rounded text-center"
          >
            Products
          </Link>

          <Link
            to="/customers"
            className="bg-black text-white p-4 rounded text-center"
          >
            Customers
          </Link>

          <Link
            to="/orders"
            className="bg-black text-white p-4 rounded text-center"
          >
            Orders
          </Link>

          <Link
            to="/receipts"
            className="bg-black text-white p-4 rounded text-center"
          >
            Receipts
          </Link>

          {(role === "admin" || role === "sales") && (
            <Link
              to="/vendors"
              className="bg-black text-white p-4 rounded text-center"
            >
              Vendors
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
