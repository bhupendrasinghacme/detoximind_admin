import React, { useEffect, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../firebase.js'
import { Link, useNavigate } from "react-router-dom";



const Modal = ({ setOpenmodel, data }) => {
    console.log(data);
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10'>Change Blog Action</div>
                    <div className='col-md-10' onClick={() => setOpenmodel(false)}>X</div>
                </div>
                <div className='row'>

                </div>
            </div>
        </>
    )
};



function Page_3() {
    const [groupdata, setGroupdata] = useState(null);
    const [openModel, setOpenmodel] = useState(false);
    const [dataOnce, setDataonce] = useState(null);
    useEffect(() => {

        const dataFetch = async () => {
            const q = await query(collection(db, 'report_collection'), orderBy('createdAt'))
            await onSnapshot(q, (querySnapshot) => {
                setGroupdata(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            });
        }
        dataFetch();
    }, []);

    const handleData = (data) => {
        setOpenmodel(true);
        setDataonce(data);
    }
    return (
        <div className="container-fluid text-center model_body">
            <div className='row mt-5'>
                <div className='col-md-4 col-sm-4 text-center col-4'>
                    <Link to="/" className='btn btn-success'> Back </Link>
                </div>
                <div className='col-md-4 col-sm-4 text-center col-8'>
                    <h1>Chat Report List</h1>
                </div>
            </div>
            {
                openModel && <Modal setOpenmodel={setOpenmodel} data={dataOnce} />
            }
            <div className='row text-center p-6'>
                <div className='col-md=3'></div>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Group Code</th>
                                <th scope="col">Messsage Id</th>
                                <th scope="col">User</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                groupdata != undefined &&
                                groupdata.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.data.group_id}</td>
                                        <td>{item.data.msg_doc_id}</td>
                                        <td>{item.data.user}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={(e) => handleData(item)}>Action</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Page_3
