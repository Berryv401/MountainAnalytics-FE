import React, {useContext, useState} from 'react';

import { Button, Form, FormGroup, Input } from 'reactstrap';
// import { authenticateUser } from '../../services/api-helper-userAuth'
import { TrackerContext } from '../../App'
import "./Account.css";

function Login() {
    const sharedStates = useContext(TrackerContext);

    const [userCreds, setUserCreds] = useState({
        email: "",
        password: "",
        username: ""
    });

    const handleEmailChange = e => {
        let newCreds = {...userCreds};
        newCreds.email = e.target.value;
        setUserCreds(newCreds)
    };

    const handlePasswordChange = e => {
        let newCreds = {...userCreds};
        newCreds.password = e.target.value;
        setUserCreds(newCreds);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (userCreds.email.length > 3) {
            sharedStates.setToken("hello");
            // const json = await authenticateUser(userCreds);
            // if (json.status === 200) {
            //     localStorage.setItem("token", json.token);
            //     sharedStates.setToken(json.token);
            //     sharedStates.setUserProfile(json.userProfile);
            //     console.log("User Authenticated");
            // } else {
            //     sharedStates.setLoggedIn(false);
            //     console.log("Error Authenticating User: ", json.error);
            // }
        }
    };

    return (
        <div>
            <div className="landing-container">
                <div className="landing-left_padding">

                </div>
                <div className="landing-content_container">
                    <div className="loginContainer">
                        <Form onSubmit={handleLogin}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    onChange={handleEmailChange}
                                    className="loginContainer-input"/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    type="password"
                                    name="password"
                                    // id="examplePassword"
                                    placeholder="Password (case sensitive)"
                                    onChange={handlePasswordChange}
                                    className="loginContainer-input"/>
                            </FormGroup>
                            <Button className="loginContainer-Button">Log In</Button>
                            <p>Dont' forget your password!</p>
                            <p>Mountain Analytics does not have access
                                to your password and cannot provide access to your account
                                if you forget it.</p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
