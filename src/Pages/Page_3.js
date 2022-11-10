import React, { useEffect } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../firebase.js'
import { Link, useNavigate } from "react-router-dom";
function Page_3() {

    useEffect(() => {
        const dataFetch = async () => {
            const q = await query(collection(db, 'report_collection'), orderBy('created'))
            await onSnapshot(q, (querySnapshot) => {
                // setCount(querySnapshot.docs.length);
                console.log(querySnapshot.docs);
            });
        }
        dataFetch();
    }, []);

    return (
        <div className="container-fluid text-center">
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <Link to="/" className='btn btn-success'> Back </Link>
                </div>
                <div className='col-md-4 text-center'>
                    <h1>Chat Report List</h1>
                </div>
                <div className='col-md-4 text-center'>

                </div>
            </div>
            <div className='row text-center'>
                <div className='col-md=3'></div>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Group Label</th>
                                <th scope="col">Group Code</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Page_3
