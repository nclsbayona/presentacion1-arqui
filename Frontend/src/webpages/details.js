import React, { useState, useEffect } from 'react';

const User = props => {
    var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://backend:8000/api/person/"+String(id))
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div><h1>Person details</h1><ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h1>{user.name} - {user.gender}</h1>
                        <h2>Age: {user.age}</h2>
                        <h3>Height: {user.height}</h3>
                        <h4>ID: {user.id}</h4>
                    </li>
                ))}
            </ul></div>
        );
    }
}
export default User;