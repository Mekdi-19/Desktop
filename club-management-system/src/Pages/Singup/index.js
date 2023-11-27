/*import React, { useState } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const SignupForm = () => {
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [idNumber, setIdNumber] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');

const handleFullNameChange = (event) => {
setFullName(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleIdNumberChange = (event) => {
setIdNumber(event.target.value);
};

const handlePhoneNumberChange = (event) => {
setPhoneNumber(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
axios.post('http://localhost:8082/singup',value)
.then(res => console.log(res))
.then(err =>console.log(err));

// Perform signup logic here, such as making an API call with the form data
console.log('Full Name:', fullName);
console.log('Email:', email);
console.log('Password:', password);
console.log('ID Number:', idNumber);
console.log('Phone Number:', phoneNumber);
// Reset the form
setFullName('');
setEmail('');
setPassword('');
setIdNumber('');
setPhoneNumber('');
};

return (
<form onSubmit={handleSubmit} className="signup-form">
<div>
<label>Full Name:</label>
<input type="text" value={fullName} onChange={handleFullNameChange} required />
</div>
<div>
<label>Email:</label>
<input type="email" value={email} onChange={handleEmailChange} required />
</div>
<div>
<label>Password:</label>
<input type="password" value={password} onChange={handlePasswordChange} required />
</div>
<div>
<label>ID Number:</label>
<input type="text" value={idNumber} onChange={handleIdNumberChange} required />
</div>
<div>
<label>Phone Number:</label>
<input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} required />
</div>
<button type="submit">Sign Up </button>
 <Link to={"/login"}>login</Link>
</form>
);
};

export default SignupForm;*/