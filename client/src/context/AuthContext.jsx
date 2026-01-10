import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const BACKEND_URL = "https://disenosys-ks3n.onrender.com";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
    setLoading(false);
  }, []);

  const clearError = () => {
    setError(null);
  };

  const login = async (email, password) => {
    try {
      setError(null);

      const { data } = await axios.post(
        `${BACKEND_URL}/api/users/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      const message = error.response?.data?.message || "Login failed";
      setError(message);
      return { success: false, message };
    }
  };

  const register = async (name, email, password) => {
    try {
      setError(null);

      const { data } = await axios.post(
        `${BACKEND_URL}/api/users`,
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      return { success: true };
    } catch (error) {
      console.error("Register error:", error);
      const message = error.response?.data?.message || "Registration failed";
      setError(message);
      return { success: false, message };
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, loading, error, clearError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
