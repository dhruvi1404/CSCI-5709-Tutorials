import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Profile.css';  // Ensure to import the CSS for styling

function ProfilePage() {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData')) || {};

    return (
        <Container className="profile-container">
            <Card>
                <Card.Header as="h5">Profile Details</Card.Header>
                <Card.Body>
                    <Card.Title>Welcome, {userData.firstName} {userData.lastName}</Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {userData.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProfilePage;
