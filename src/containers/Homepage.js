import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Product from '../components/Admin/Product'
import {connect} from 'react-redux';
import Footer from '../components/Footer';


const Homepage = (props) => {
    return (
        <div>
            <Header/>
            <Home/>
            <Product/>
            <Footer/>
        </div>
    )
}

export default connect(state=>({all:state}),{})(Homepage)
