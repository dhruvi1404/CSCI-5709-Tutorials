import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfileList.css'; // Make sure the path is correct

function UserProfileList() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get('https://express-t4.onrender.com/api/users');
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = (userId) => {
        navigate(`/user/${userId}`);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm);
    });

    return (
        <div className="user-profile-container">
            <input
                type="text"
                className="form-control search-bar"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="row">
                {filteredUsers.map(user => (
                    <div key={user._id} className="col-sm-6">
                        <div className="card" onClick={() => handleUserClick(user._id)} style={{ cursor: 'pointer' }}>
                            <img src={user.picture} className="card-img-top" alt={`${user.name}`} />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                                <p className="card-text"><small className="text-muted">{user.company}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserProfileList;
