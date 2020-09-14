import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Product from '../components/Admin/Product'
import {connect} from 'react-redux';


const Homepage = (props) => {
    return (
        <div>
            <Header/>
            <Home/>
            <Product/>
        </div>
    )
}

export default connect(state=>({all:state}),{})(Homepage)
