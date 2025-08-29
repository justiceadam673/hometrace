import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try to get user data from localStorage on initial load
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [profilePic, setProfilePic] = useState(() => {
    // Try to get profile pic from localStorage
    return localStorage.getItem("userProfilePic");
  });

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    if (user) {
      localStorage.setItem("userData", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    // Save profile pic to localStorage whenever it changes
    if (profilePic) {
      localStorage.setItem("userProfilePic", profilePic);
    }
  }, [profilePic]);

  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  const updateProfilePic = (newProfilePic) => {
    setProfilePic(newProfilePic);
  };

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userProfilePic");
    localStorage.removeItem("isAuthenticated");
    setUser(null);
    setProfilePic(null);
  };

  return (
    <UserContext.Provider
      value={{ user, updateUser, profilePic, updateProfilePic, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
