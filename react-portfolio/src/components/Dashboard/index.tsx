/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { Login } from "../Login";
import { Home } from "./home";

export const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, []);

  return (
    <div>
      {user ? <Home/> : <Login />}
    </div>
  );
};