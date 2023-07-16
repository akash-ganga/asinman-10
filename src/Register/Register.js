import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
    const [err, setErr] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;

        if(password.length < 6){
            setErr('password should be 6 characters or more.');
            return;
        }

        if(password !== confirm){
            setErr("Your password didn't match");
            return;
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            event.target.reset();
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
            <h1 className='login-title'>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='your email' required id=''></input>
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='password' required id=''></input>
                </div>
                <div className="form-control">
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type='password' name='confirm' placeholder='password' required id=''></input>
                </div>
                <input className='submit-but' type="submit" value='Register' />
            </form>
            <p className='log-bottom-txt'>Already have an account? Go to <Link className='lt' to='/login'>Log in</Link></p>
            <p className='txt-err'>{err}</p>
        </div>
    );
};

export default Register;