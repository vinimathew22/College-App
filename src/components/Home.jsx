import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h4 class="text-center">WELCOME TO</h4>
                <p class="text-center fs-1 fw-semibold">SREE BUDDHA COLLEGE OF ENGINEERING</p>
                <h5 class="text-center">Pattoor, Alappuzha</h5>
              </div>
              <img src="https://sbce.ac.in/wp-content/uploads/2016/03/1-1.jpg" alt="" srcset="" />
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <figure class="text-center">
                  <blockquote class="blockquote">
                    <p>Education is the most powerful weapon which you can use to change the world.</p>
                  </blockquote>
                  <figcaption class="blockquote-footer"> Nelson Mandela </figcaption>
                </figure>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <p class="text-center fs-4 fw-semibold">COURSES</p>
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Civil Engineering</h5>
                      <medium> 60 seats </medium>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Computer Science & Engineering</h5>
                      <medium> 180 seats </medium>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Electronics & Communication Engineering</h5>
                      <medium> 30 seats </medium>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Electrical & Electronics Engineering</h5>
                        <medium> 30 seats </medium>
                      </div>
                    </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Mechanical Engineering</h5>
                        <medium> 60 seats </medium>
                      </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Biotechnology & Biochemical Engineering</h5>
                        <medium> 30 seats </medium>
                      </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Food Technology</h5>
                        <medium> 30 seats </medium>
                      </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Artifical Intelligence & Machine Learning</h5>
                        <medium> 60 seats </medium>
                      </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
