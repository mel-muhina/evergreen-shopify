"use client";

import React from "react"
import { Cyclist, Hero, Nav, Categories, Featured, Footer, Item } from "./components"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import "./App.css"

const HomePage = () => {
  return (
    <>
        <Nav />
        <Hero />
        <Categories />
        <Featured />
        <Item />
        <Footer />
    </>
  )
}

export default HomePage
