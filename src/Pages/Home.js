import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
function Home() {
    return (
        <div className='App mt-5'>
            <h1>Home</h1>
            <div className='all_btns_wrapper mt-5'>
                <Link to="/page_1" className='btn btn-primary'>Open Group List</Link>
            </div>
            <div className='mt-4'>
                <Link to="/page_2" className='btn btn-primary'>Open Notification</Link>
            </div>
        </div>
    )
}

export default Home
