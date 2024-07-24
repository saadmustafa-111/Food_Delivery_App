import React from "react"
import Topbar from "./HomeComponents/Topbar"
import Header from "./HomeComponents/Header"
import Midcontainer from "./HomeComponents/Midcontainer"
import Ordercomponent from "./HomeComponents/Ordercomp"
import Categories from "./HomeComponents/Categories"
import Restaurant from "./HomeComponents/Restaurant"
import Orderingapp from "./HomeComponents/Orderingapp"
import Food from "./HomeComponents/Food"
import Cardcomp from "./HomeComponents/Cardcomp"
import Footer from "./HomeComponents/Footer"
import Progress from "./HomeComponents/Progress"
export default function App() {
  return (
    <>
    <Topbar/>
    <Header/>
    <Midcontainer/>
    <Ordercomponent/>
    <Categories/>
    <Restaurant/>
    <Orderingapp/>
    <Food/>
    <Cardcomp/>
    <Progress/>
    <Footer/>
    
    </>
  )
}