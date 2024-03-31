import React from 'react'

const LoginForm = () => {
  return (
    <section className='contact-section'>
      <div className='auto-container'>
        <div className='contact-title'>
          <h2>Login to your account</h2>
        </div>
        <div className='row-clearfix'>
          <div className='form-column col-lg-7'>
            <div className='inner-column'>
              <div className='contact-form'>
                <form>
                  <div className='row clearfix'>
                    <div className='form-group col-md-12'>
                      <input type="email" name='employee_email' placeholder='Email' />
                    </div>
                    <div className='form-group col-md-12'>
                      <input type="password" name='employee_password' placeholder='Password' />
                    </div>
                    <div className='form-group col-md-12'>
                      <button className='theme-btn btn-style-one' type='submit' data-loading-text="Please wait...">
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm