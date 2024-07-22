"use client"
import CategoryContainer from "@/components/Category/CategoryContainer";
import Login from "@/components/Login/Login";
import React from "react";

const Home = () => {



  return (
    <main>
      <div className="py-6 flex justify-end">
        <Login />
      </div>

      <CategoryContainer />
    </main>
  )
}

export default Home
