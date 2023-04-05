import React from 'react'
import Button from '../../components/Button/Button';
import './Signup.css';

const Signup = () => {
  return (
    <>
    <div className='signup'>
      <div className="signup-container">
        <div className="h1">Sign Up</div>
        <form>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
            </div>
            <div className='regBtn'>
              <Button text='Register' />
            </div>
            
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup