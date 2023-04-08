import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

function Login({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    if(email === "admin@gmail.com" && password === "Admin@123") {
      sessionStorage.setItem("userLoggedIn", "yes");
      setUser("yes");
    } else {
      setUser('');
      sessionStorage.setItem("userLoggedIn" , "");
    }
  }

  return (
    <div className="container">
      <div className="row d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="col-md-12 w-50">
          <h1 className="d-flex aligns-items-center justify-content-center">Login</h1>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange = {event =>setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange = {event =>setPassword(event.target.value)}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
          <p className="mt-3">Note: <br/>Username: <b>admin@gmail.com</b><br/> Password: <b>Admin@123</b></p>
        </div>
      </div>
    </div>
  );
}

export default Login