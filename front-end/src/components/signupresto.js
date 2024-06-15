import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const SignUpResto = () => {
  return (
      <section className="row vh-100 justify-content-center align-items-center">
        <div className="col-6 text-center">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={`${process.env.PUBLIC_URL}/assets/images/login1.png`} className="d-block w-90 mx-auto" alt="..." height="650px" />
              </div>
              <div className="carousel-item">
                <img src={`${process.env.PUBLIC_URL}/assets/images/login2.png`} className="d-block w-90 mx-auto" alt="..." height="650px" />
              </div>
              <div className="carousel-item">
                <img src={`${process.env.PUBLIC_URL}/assets/images/login3.png`} className="d-block w-90 mx-auto" alt="..." height="650px" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 position-relative">
          <div className="form-box signup">
            <h1>Sign Up</h1>
            <p className="welcome">Create Your Account!</p>
            <form>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="name"><strong>Name</strong></label>
                  <input type="text" id="name" name="name" className="form-control" required placeholder="Enter Your Name" />
                </div>
                <div className="col">
                  <label htmlFor="username"><strong>Username</strong></label>
                  <input type="text" id="username" name="username" className="form-control" required placeholder="Enter Your Username" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" id="email" name="email" className="form-control" required placeholder="Enter Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" id="password" name="password" className="form-control" required placeholder="Enter Your Password" />
              </div>
              <button type="submit">Sign Up</button>
            </form>

            <div className="afterform mt-3">
              <p>Or Sign Up With</p>
              <div className="d-flex justify-content-around pb-3">
                <button className="btn btn-light border border-2 flex-fill me-2"><i className='bx bxl-google'></i> Google</button>
              </div>
            </div>

            <p>Already have an account? <a href="/login_resto" className="login">Log In</a></p>
          </div>
        </div>
      </section>
  );
};

export default SignUpResto;