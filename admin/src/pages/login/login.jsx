import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../redux/apiCall";

/// tên component phải gi hoa ở chữ cái đầu
// login X lỗi
// Login
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                style={{
                    padding: "10px",
                    marginBottom: "20px",
                    borderRadius: "10px",
                    border: "1px grey solid"
                }}
                type="text"
                placeholder="username"
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                style={{
                    padding: "10px",
                    marginBottom: "30px",
                    borderRadius: "10px",
                    border: "1px grey solid"
                }}
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                style={{
                    padding: "5px 65px",
                    borderRadius: "10px",
                    border: "1px grey solid",
                    
                }} 
                onClick={handleClick}
                >Login</button>
        </div>
    );
};

export default Login;
