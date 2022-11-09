import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase.js';
import './../assets/index.css';
import { Link, useNavigate } from "react-router-dom";

function Page_1() {
    const navigate = useNavigate();
    const handleProceed = (id) => {
        navigate(`/edit_group/${id}`);
    };
    const [groupdata, setGroupdata] = useState(null);
    useEffect(() => {
        const q = query(collection(db, 'chat_group_list'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setGroupdata(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);
    return (
        <div className="container-fluid text-center">
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <Link to="/" className='btn btn-success'> Back </Link>
                </div>
                <div className='col-md-4 text-center'>
                    <h1>Chat Group List</h1>
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
                            {
                                groupdata != null &&
                                groupdata.map((item, index) => (
                                    <tr key={index}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.data.group_label}</td>
                                        <td>{item.data.group_code}</td>
                                        <td>{item.data.group_status}</td>
                                        <td>
                                            <button onClick={() => handleProceed(item.id)} className='btn btn-warning'>Edit</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <Link to='/page_2'>
                        <div className='fabric_btn'>+</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page_1
