// import React, { useState } from "react";
// import NavAgent from "../../components/Agent/navAgents.jsx";
// import Sidebar from "../../components/Agent/sidebar.jsx";

// import {
//   Bell,
//   User,
//   Lock,
//   Globe,
//   Moon,
//   Sun,
//   ChevronRight,
//   Edit2,
//   Camera,
//   LogOut,
// } from "lucide-react";

// import { Switch } from "./ui/switch";

// const Settings = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [emailNotifications, setEmailNotifications] = useState(true);
//   const [pushNotifications, setPushNotifications] = useState(true);
//   const [marketingEmails, setMarketingEmails] = useState(false);
//   const [language, setLanguage] = useState("English");
//   const [profileImage, setProfileImage] = useState(null);

//   // Handler for profile image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handler for logging out
//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     // Add any other logout logic here
//     window.location.href = "/AdminSignIn";
//   };

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="h-auto bg-[#FAFAFA]">
//       <NavAgent setIsSidebarOpen={setIsSidebarOpen} />
//       <div className="flex gap-8">
//         {/* Overlay for mobile */}
//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 z-40 md:hidden"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//         )}

//         {/* Sidebar */}
//         <div
//           className={`
//                         fixed top-0 left-0 h-auto bg-[#FAFAFA] z-50
//                         transform transition-transform duration-300 ease-in-out
//                         w-[75%] md:w-[300px] lg:w-[300px]
//                         md:relative md:transform-none md:block
//                         ${
//                           isSidebarOpen
//                             ? "translate-x-0"
//                             : "-translate-x-full md:translate-x-0"
//                         }
//                       `}
//         >
//           <Sidebar onClose={() => setIsSidebarOpen(false)} />
//         </div>
//         <div className="w-full mx-auto p-6">
//           <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

//           {/* Profile Section */}
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">
//               Profile
//             </h2>
//             <div className="flex items-center space-x-4 mb-6">
//               <div className="relative">
//                 <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
//                   {profileImage ? (
//                     <img
//                       src={profileImage}
//                       alt="Profile"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <User className="w-full h-full p-4 text-gray-400" />
//                   )}
//                 </div>
//                 <label
//                   htmlFor="profile-upload"
//                   className="absolute bottom-0 right-0 bg-[#2C1669] text-white p-1.5 rounded-full cursor-pointer hover:bg-opacity-90"
//                 >
//                   <Camera size={14} />
//                 </label>
//                 <input
//                   id="profile-upload"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium">Richard Ale</h3>
//                 <p className="text-gray-500 text-sm">richard@example.com</p>
//               </div>
//               <button className="ml-auto flex items-center text-[#2C1669] hover:text-opacity-80">
//                 <Edit2 size={18} className="mr-1" />
//                 Edit Profile
//               </button>
//             </div>
//           </div>

//           {/* Account Settings */}
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">
//               Account Settings
//             </h2>

//             {/* Password Change Option */}
//             <div className="flex items-center justify-between py-3 border-b">
//               <div className="flex items-center space-x-3">
//                 <Lock className="text-gray-400" size={20} />
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">Password</p>
//                   <p className="text-xs text-gray-500">Change your password</p>
//                 </div>
//               </div>
//               <ChevronRight className="text-gray-400" size={20} />
//             </div>

//             {/* Language Selection */}
//             <div className="flex items-center justify-between py-3 border-b">
//               <div className="flex items-center space-x-3">
//                 <Globe className="text-gray-400" size={20} />
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">Language</p>
//                   <p className="text-xs text-gray-500">Current: {language}</p>
//                 </div>
//               </div>
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="border rounded-md px-2 py-1 text-sm"
//               >
//                 <option value="English">English</option>
//                 <option value="French">French</option>
//                 <option value="Spanish">Spanish</option>
//               </select>
//             </div>

//             {/* Dark Mode Toggle */}
//             <div className="flex items-center justify-between py-3 border-b">
//               <div className="flex items-center space-x-3">
//                 {darkMode ? (
//                   <Moon className="text-gray-400" size={20} />
//                 ) : (
//                   <Sun className="text-gray-400" size={20} />
//                 )}
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">Dark Mode</p>
//                   <p className="text-xs text-gray-500">
//                     Toggle dark mode theme
//                   </p>
//                 </div>
//               </div>
//               <Switch
//                 checked={darkMode}
//                 onCheckedChange={setDarkMode}
//                 className="data-[state=checked]:bg-[#2C1669]"
//               />
//             </div>
//           </div>

//           {/* Notification Settings */}
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">
//               Notifications
//             </h2>

//             {/* Email Notifications */}
//             <div className="flex items-center justify-between py-3 border-b">
//               <div className="flex items-center space-x-3">
//                 <Bell className="text-gray-400" size={20} />
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">
//                     Email Notifications
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Receive email about your activity
//                   </p>
//                 </div>
//               </div>
//               <Switch
//                 checked={emailNotifications}
//                 onCheckedChange={setEmailNotifications}
//                 className="data-[state=checked]:bg-[#2C1669]"
//               />
//             </div>

//             {/* Push Notifications */}
//             <div className="flex items-center justify-between py-3 border-b">
//               <div className="flex items-center space-x-3">
//                 <Bell className="text-gray-400" size={20} />
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">
//                     Push Notifications
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Receive push notifications
//                   </p>
//                 </div>
//               </div>
//               <Switch
//                 checked={pushNotifications}
//                 onCheckedChange={setPushNotifications}
//                 className="data-[state=checked]:bg-[#2C1669]"
//               />
//             </div>

//             {/* Marketing Emails */}
//             <div className="flex items-center justify-between py-3">
//               <div className="flex items-center space-x-3">
//                 <Bell className="text-gray-400" size={20} />
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">
//                     Marketing Emails
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Receive marketing emails
//                   </p>
//                 </div>
//               </div>
//               <Switch
//                 checked={marketingEmails}
//                 onCheckedChange={setMarketingEmails}
//                 className="data-[state=checked]:bg-[#2C1669]"
//               />
//             </div>
//           </div>

//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
//           >
//             <LogOut size={18} />
//             <span>Log Out</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;
