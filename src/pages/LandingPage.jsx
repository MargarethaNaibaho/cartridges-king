import FirstHeader from "../components/FirstHeader";
import React from "react";
import SecondHeader from "../components/SecondHeader";
import NavBar from "../components/NavBar";
import Home from "../components/Home";

export default class LandingPage extends React.Component{
    render(){
        return(
            <>
                <FirstHeader></FirstHeader>
                <SecondHeader></SecondHeader>
                <NavBar></NavBar>
                <Home></Home>
            </>
        )
    }
}