import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserProfileDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user details:', error);
            }
        };

        fetchUserDetails();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <img src={user.picture} className="card-img-top" alt={`${user.name}`} />
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text"><small className="text-muted">{user.company}</small></p>
                    <p className="card-text">{user.about}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Phone: {user.phone}</li>
                        <li className="list-group-item">Address: {user.address}</li>
                        <li className="list-group-item">Balance: {user.balance}</li>
                        <li className="list-group-item">Registered: {user.registered}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserProfileDetail;
