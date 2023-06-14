import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className="login-form-parent-container">
 
<div className="login-form-container">
         <Form >
       <Form.Group className="mb-3" controlId="formBasicEmail">
       <h1 className="login-text">Login Page</h1>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
       
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </div>
    </div>
  );
}

export default Login;