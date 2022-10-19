import {Link, useParams} from "react-router-dom"

const User = () => {
    const {id} = useParams();
    return (
        <>
            <h1>Users</h1>
            <strong>Select a User:</strong>
            <ul>
                <li>
                    <Link to="/users/1"></Link>
                </li>
                <li>
                    <Link to="/users/2"></Link>
                </li>
                <li>
                    <Link to="/users/3"></Link>
                </li>
            </ul>
            <p>{id}</p>
        </>
    );

}

export default User;