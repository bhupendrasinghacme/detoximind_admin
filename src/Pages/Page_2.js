import React, { useState, useEffect } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase.js'
import { useNavigate } from "react-router-dom";

const Page_2 = () => {
    const navigate = useNavigate();
    const [grouplabel, setGrouplabel] = useState('');
    const [groupstatus, setGroupstatus] = useState(true);
    const [count, setCount] = useState(0);
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    useEffect(() => {
        const dataFetch = async () => {
            const q = await query(collection(db, 'chat_group_list'), orderBy('created'))
            await onSnapshot(q, (querySnapshot) => {
                setCount(querySnapshot.docs.length);

            });
        }
        dataFetch();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (grouplabel !== '' && groupstatus !== '') {
            try {

                await addDoc(collection(db, 'chat_group_list'), {
                    group_label: grouplabel,
                    group_status: groupstatus,
                    group_id: 'detoxi_chat_group_' + (count + 1),
                    group_code: `${makeid(6)}`,
                    created: Timestamp.now()
                });
                alert("Group Created Successfully.");
                navigate('/page_1');
            } catch (err) {
                console.log(err)
            }
        } else {
            alert("Please enter all fields.");
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <h1 className='text-center mt-4'>Create Group</h1>
                <div className='col-md-3'></div>
                <div className='col-md-6 mt-3'>
                    <form onSubmit={handleSubmit} className='addTask' name='addTask'>
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
                            <select className="form-control" id="group_status" onChange={(e) => setGroupstatus(e.target.value)}>
                                <option value="true">True</option>
                                <option value="false">False</option>
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

export default Page_2
