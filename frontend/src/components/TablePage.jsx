// src/TablePage.jsx (note the capitalization)
import { useEffect, useState } from "react";
import axios from "axios";

const TablePage = () => {
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/items", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItems(res.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || "Failed to fetch data. Please try again.";
        setError(errorMessage);

        if (err.response?.status === 401) {
          alert("Your session has expired. Please log in again.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (id, value) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Items Dashboard</h2>
          <p className="text-gray-500">View and compare your items with percentage calculations</p>
        </div>
        <div className="p-6">
          {error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          ) : isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
              <span className="ml-2">Loading data...</span>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No items found. Add some items to get started.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Existing Value
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Your Input
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item) => {
                    const userValue = parseFloat(inputs[item.id]) || 0;
                    const percentage = ((userValue / item.value) * 100).toFixed(2);

                    return (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.value}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <input
                            type="number"
                            value={inputs[item.id] || ""}
                            onChange={(e) => handleChange(item.id, e.target.value)}
                            className="w-full max-w-[150px] py-1 px-2 border border-gray-300 rounded-md"
                            placeholder="Enter value"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {userValue ? `${percentage}%` : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablePage;