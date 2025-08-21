import React, { useState } from "react";
import NavAgent from "../../components/Agent/navAgents.jsx";
import Sidebar from "../../components/Agent/sidebar.jsx";
import { Search, ChevronLeft, CheckCircle2 } from "lucide-react";
import duplexImage from "../../assets/agent/duplex.jpg";

const initialOrders = [
  {
    id: 1,
    product: "3 Bedroom Duplex",
    image: duplexImage,
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+234 123 456 7890",
      address: "123 Lagos Street, Lekki",
    },
    date: "2025/08/20",
    amount: "$250,000",
    paymentType: "Credit Card",
    status: "Process",
    details: {
      description:
        "Located in Lekki, Lagos. Modern design with premium finishes.",
      bedrooms: 3,
      bathrooms: 4,
      garages: 2,
      size: "350 sqm",
      location: "Lekki Phase 1",
      amenities: ["Swimming Pool", "24/7 Security", "Power Backup"],
      yearBuilt: 2024,
    },
  },
  {
    id: 2,
    product: "2 Bedroom Apartment",
    image: duplexImage,
    customer: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+234 123 456 7891",
      address: "456 Ikoyi Avenue",
    },
    date: "2025/08/18",
    amount: "$120,000",
    paymentType: "Bank Transfer",
    status: "Completed",
    details: {
      description: "Modern apartment in the heart of Ikoyi.",
      bedrooms: 2,
      bathrooms: 2,
      garages: 1,
      size: "180 sqm",
      location: "Ikoyi",
      amenities: ["Gym", "Parking", "Security"],
      yearBuilt: 2023,
    },
  },
  {
    id: 3,
    product: "Luxury Villa",
    image: duplexImage,
    customer: {
      name: "Samuel Johnson",
      email: "samuel.j@example.com",
      phone: "+234 123 456 7892",
      address: "789 Banana Island Road",
    },
    date: "2025/08/15",
    amount: "$500,000",
    paymentType: "Crypto",
    status: "Failed",
    details: {
      description: "Exclusive villa with premium amenities.",
      bedrooms: 5,
      bathrooms: 6,
      garages: 3,
      size: "750 sqm",
      location: "Banana Island",
      amenities: ["Private Pool", "Smart Home", "Cinema Room", "Garden"],
      yearBuilt: 2025,
    },
  },
];

const statusColors = {
  Process: {
    text: "#CD6200",
    bg: "#FEF2E5",
  },
  Completed: {
    text: "#1F9254",
    bg: "#E6F4ED",
  },
  Failed: {
    text: "#D92D20",
    bg: "#FEE4E2",
  },
};

function OrderPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("list"); // 'list' or 'details'

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(
      orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: newStatus };
        }
        return order;
      })
    );
    setSelectedOrder((prev) => ({ ...prev, status: newStatus }));
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.date.includes(searchQuery) ||
      order.amount.includes(searchQuery) ||
      order.paymentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="h-auto bg-[#FAFAFA]">
      <NavAgent setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex gap-10">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-auto bg-[#FAFAFA] z-50
            transform transition-transform duration-300 ease-in-out
            w-[75%] md:w-[300px] lg:w-[300px]
            md:relative md:transform-none md:block
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
        >
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        <div className="w-full p-6 flex flex-col gap-6 min-h-screen">
          {view === "list" && (
            <>
              <div className="flex items-center gap-4 bg-white p-2 shadow-sm">
                <p className="text-[12px]">entries</p>
                <div className="flex items-center gap-2 border border-gray-300 p-.5 w-full rounded-md">
                  <Search className="w-4 h-4 ml-2" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="outline-none p-1 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
          {/* {view === "details" && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setView("list");
                  setSelectedOrder(null);
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft size={20} />
                <span>Back to Orders</span>
              </button>
            </div>
          )} */}

          {/* Main Section */}
          {view === "list" ? (
            <div className="overflow-x-auto pr-8">
              <table className="w-full bg-white shadow-sm">
                <thead>
                  <tr className="bg-white border-b">
                    <th className="p-4 text-left font-semibold text-sm">
                      Product
                    </th>
                    <th className="p-4 text-left font-semibold text-sm">
                      Customer
                    </th>
                    <th className="p-4 text-left font-semibold text-sm">
                      Date
                    </th>
                    <th className="p-4 text-left font-semibold text-sm md:table-cell hidden">
                      Amount
                    </th>
                    <th className="p-4 text-left font-semibold text-sm md:table-cell hidden">
                      Payment
                    </th>
                    <th className="p-4 text-left font-semibold text-sm md:table-cell hidden">
                      Status
                    </th>
                    <th className="p-4 text-left font-semibold text-sm md:table-cell hidden">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className={`border-b ${
                        order.status === "Process" ? "bg-[#F7F6FE]" : "bg-white"
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={order.image}
                            alt={order.product}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <span className="font-medium text-sm">
                            {order.product}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{order.customer.name}</td>
                      <td className="p-4 text-sm">{order.date}</td>
                      <td className="p-4 text-sm md:table-cell hidden">
                        {order.amount}
                      </td>
                      <td className="p-4 text-sm md:table-cell hidden">
                        {order.paymentType}
                      </td>
                      <td className="p-4 md:table-cell hidden">
                        <span
                          className="text-sm px-3 py-1 rounded-xl font-medium"
                          style={{
                            backgroundColor: statusColors[order.status].bg,
                            color: statusColors[order.status].text,
                          }}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4 md:table-cell hidden">
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setView("details");
                          }}
                          className="bg-transparent text-black px-4 py-2 rounded border text-sm border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setView("list");
                    setSelectedOrder(null);
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft size={20} />
                  <span>Back to Orders</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 p-1">
                {/* Left Section - Image and Details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Image Section */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img
                      src={selectedOrder.image}
                      alt={selectedOrder.product}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex flex-row gap-6">
                    {/* Property Details Section */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">
                        Property Details
                      </h4>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">
                          {selectedOrder.product}
                        </h3>
                        <p className="text-gray-600">
                          {selectedOrder.details.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Bedrooms</p>
                            <p className="font-medium">
                              {selectedOrder.details.bedrooms}
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Bathrooms</p>
                            <p className="font-medium">
                              {selectedOrder.details.bathrooms}
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Size</p>
                            <p className="font-medium">
                              {selectedOrder.details.size}
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Year Built</p>
                            <p className="font-medium">
                              {selectedOrder.details.yearBuilt}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <p className="text-sm text-gray-500 mb-2">
                            Amenities
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedOrder.details.amenities.map(
                              (amenity, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200"
                                >
                                  {amenity}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Customer Section */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4">
                        Customer Details
                      </h4>
                      <div className="bg-white p-4 rounded-lg space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium w-1/2">
                            Name
                          </span>
                          <span className="font-semibold text-gray-900 w-1/2 text-right">
                            {selectedOrder.customer.name}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium w-1/2">
                            Email
                          </span>
                          <span className="font-semibold text-gray-900 w-1/2 text-right">
                            {selectedOrder.customer.email}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium w-1/2">
                            Phone
                          </span>
                          <span className="font-semibold text-gray-900 w-1/2 text-right">
                            {selectedOrder.customer.phone}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium w-1/2">
                            Address
                          </span>
                          <span className="font-semibold text-gray-900 w-1/2 text-right">
                            {selectedOrder.customer.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Payment and Actions */}
                <div className="p-8 pb-12 bg-white rounded-lg shadow-sm">
                  {/* Success Icon and Title */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center items-center">
                      <CheckCircle2 className="w-24 h-24 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-gray-200 p-4">
                      Payment Successful
                    </h2>
                  </div>

                  {/* Payment Details */}
                  <div className="max-w-lg mx-auto">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 text-center">
                      PAYMENT DETAILS
                    </h3>

                    <div className="space-y-5">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium w-1/2">
                          Name
                        </span>
                        <span className="font-semibold text-gray-900 w-1/2 text-right">
                          {selectedOrder.customer.name}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium w-1/2">
                          Payment date
                        </span>
                        <span className="font-semibold text-gray-900 w-1/2 text-right">
                          {selectedOrder.date}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium w-1/2">
                          Payment method
                        </span>
                        <span className="font-semibold text-gray-900 w-1/2 text-right">
                          {selectedOrder.paymentType}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium w-1/2">
                          Quantity
                        </span>
                        <span className="font-semibold text-gray-900 w-1/2 text-right">
                          1 House
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium w-1/2">
                          Item Name
                        </span>
                        <span className="font-semibold text-gray-900 w-1/2 text-right">
                          {selectedOrder.product}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium w-1/2">
                          Amount
                        </span>
                        <span className="font-semibold text-gray-900 w-1/2 text-right">
                          {selectedOrder.amount}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium w-1/2">
                          Status
                        </span>
                        <span
                          className="px-3 py-1 rounded-full text-sm font-medium w-1/2 text-right"
                          style={{
                            backgroundColor:
                              statusColors[selectedOrder.status].bg,
                            color: statusColors[selectedOrder.status].text,
                          }}
                        >
                          {selectedOrder.status}
                        </span>
                      </div>

                      <div className="border-t-2 border-gray-200 pt-4 mt-6">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-900 text-lg">
                            TOTAL :
                          </span>
                          <span className="font-bold text-gray-900 text-xl">
                            ₦13,000,000.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="text-center mt-10">
                    <button className="bg-transparent w-[60%] px-4 py-3 rounded-lg border border-black">
                      Download
                    </button>
                  </div>

                  {/* Action Buttons */}
                  {selectedOrder.status === "Process" && (
                    <div className="flex flex-col gap-4 mt-8">
                      <button
                        onClick={() =>
                          handleStatusUpdate(selectedOrder.id, "Completed")
                        }
                        className="w-full bg-[#2C1669] text-white px-4 py-3 rounded-lg"
                      >
                        Confirm Purchase
                      </button>
                      <button
                        onClick={() =>
                          handleStatusUpdate(selectedOrder.id, "Failed")
                        }
                        className="w-full bg-white text-[#A60000] px-4 py-3 rounded-lg border-[#9E0000] border-2"
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
