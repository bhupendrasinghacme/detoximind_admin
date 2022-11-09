import React, { useState, useEffect } from 'react'
import { db } from '../firebase.js';
import { doc, updateDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore"
import { useParams, useNavigate } from 'react-router-dom';

function EditGroup() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [grouplabel, setGrouplabel] = useState('');
    const [groupstatus, setGroupstatus] = useState(true);

    useEffect(() => {
        const dataFetch = async () => {
            const taskDocRef = doc(db, 'chat_group_list', id)
            const docSnap = await getDoc(taskDocRef)
            const data = docSnap.exists() ? docSnap.data() : null;
            setGrouplabel(data.group_label);
            setGroupstatus(data.group_status);

        }
        dataFetch();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault()
        const taskDocRef = doc(db, 'chat_group_list', id)
        try {
            await updateDoc(taskDocRef, {
                group_label: grouplabel,
                group_status: groupstatus,
            })
            alert("Update Group Successfully.");
            navigate('/page_1')
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <h1 className='text-center mt-4'>Create Group</h1>
                <div className='col-md-3'></div>
                <div className='col-md-6 mt-3'>
                    <form onSubmit={handleUpdate} className='addTask' name='addTask'>
                        <div className="form-group">
                            <label htmlFor="group_label">Group Label</label>
                            <input type="text" className="form-control"
                                id="group_label"
                                placeholder="Enter Group Label"
                                value={grouplabel}
                                onChange={(e) => setGrouplabel(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="group_status">Group Status</label>
                            <select className="form-control" value={groupstatus} id="group_status" onChange={(e) => setGroupstatus(e.target.value)}>
                                <option value="true" >True</option>

                                <option value="false" >False</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default EditGroup

