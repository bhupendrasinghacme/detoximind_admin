import React from 'react'
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 text-center mt-5'>
                    <h1>Home</h1>
                </div>
                <div className='col-md-4'></div>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 text-center'>
                    <Link to='/page_1' className='btn btn-primary'>List Of Group</Link>
                </div>
                <div className='col-md-2'></div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-2'></div>
                <div className='col-md-8 text-center'>

                    <Link to='/page_3' className='btn btn-primary'>List Of Report</Link>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default Home
