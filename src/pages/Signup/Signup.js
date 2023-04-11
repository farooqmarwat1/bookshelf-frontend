import React from 'react'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <div class="container">
  <div class="pt-5">
     
              <div class="row">
                  <div class="col-md-5 mx-auto">
                      <div class="card card-body">
                          <h1 class="text-center">SignUp </h1>    
                          <form id="submitForm" action="/login" method="post" data-parsley-validate="" data-parsley-errors-messages-disabled="true" novalidate="" _lpchecked="1"><input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                              
                              <div className="form-group required">
                              <input type="text" placeholder="Name" class="form-control" id="namw" />
                              </div>  
                              <div className="form-group required">
                              <input type="email" placeholder="Emai" class="form-control" id="email" />
                              </div>                    
                              <div class="form-group required">
                                  
                              <input type="password" placeholder='Password' class="form-control" id="password"/>
                              </div>
                              
                              <div class="form-group pt-1">
                                  <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
                              </div>
                          </form>
                          <p class="small-xl pt-3 text-center">
                              <span class="text-muted">Already member?</span>
                              <Link to="/login">login</Link>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
</div>
    </>
  )
}

export default Signup