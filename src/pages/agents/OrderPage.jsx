import React, { useState } from "react";
import NavAgent from "../../components/Agent/navAgents.jsx";
import Sidebar from "../../components/Agent/sidebar.jsx";
import {
  Search,
  ChevronLeft,
  CheckCircle2,
  MapPin,
  Verified,
  Bed,
  House,
} from "lucide-react";
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

  const handleNextUpdate = () => {};

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
                    <th className="p-4 text-left font-semibold text-sm ">
                      Amount
                    </th>
                    <th className="p-4 text-left font-semibold text-sm">
                      Payment
                    </th>
                    <th className="p-4 text-left font-semibold text-sm ">
                      Status
                    </th>
                    <th className="p-4 text-left font-semibold text-sm ">
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
                      <td className="p-4 text-sm ">{order.amount}</td>
                      <td className="p-4 text-sm ">{order.paymentType}</td>
                      <td className="p-4 ">
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
                      <td className="p-4 ">
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
            <div className="space-y-4">
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
                  <div className="bg-gray-50 rounded-lg">
                    <img
                      src={selectedOrder.image}
                      alt={selectedOrder.product}
                      className="w-full h-[60vh] object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                    {/* Property Details Section */}
                    <div className=" w-full md:w-[70%]">
                      <div className="space-y-3.5">
                        <span className="flex ">
                          <h3 className="text-xl font-semibold">
                            {selectedOrder.product}
                          </h3>
                          <Verified
                            className="fill-blue-500 text-white"
                            size={30}
                          />
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="opacity-65" />
                            <p className="opacity-65 text-sm">
                              {selectedOrder.details.location}
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <div className="flex items-center gap-2">
                              <Bed size={16} className="opacity-65" />
                              <span>
                                <p className="text-sm opacity-65">
                                  {selectedOrder.details.bedrooms} Bedrooms
                                </p>
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <House size={16} className="opacity-65" />
                              <span>
                                <p className="text-sm opacity-65">
                                  {selectedOrder.details.bathrooms} Bathrooms
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <p className="opacity-65">
                            {selectedOrder.details.description}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5 p-5 bg-[#EBE8F3] w-[80%] rounded-lg">
                          <p className="text-2xl font-semibold">Build Cost</p>
                          <p className="text-3xl font-bold">
                            {selectedOrder.amount}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Customer Section */}
                    <div className="bg-[#fffff] px-4  py-2 rounded-lg md:w-[30%] shadow-sm flex  flex-col items-center justify-center gap-5 w-full">
                      <img
                        src={duplexImage}
                        alt=""
                        className="w-[130px] h-[130px] rounded-full object-cover "
                      />
                      <p className="text-lg font-semibold">Richard Doe</p>
                      <button className="w-full bg-[#2C1669] text-white py-3 rounded-2xl md:rounded-lg font-bold">
                        Contact Client
                      </button>
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
                </div>
              </div>
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

              {selectedOrder.status === "Completed" && (
                <div className="flex flex-col gap-4 mt-8">
                  <button className="w-full bg-[#2C1669] text-white px-4 py-3 rounded-lg">
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
