import React from 'react'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <p class="text-center fs-2 fw-semibold">PHOTO GALLERY</p>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9181-copy.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Reference Section</h5>
                          <p>The reference section of the library has rich collection of international editions of reference books, handbooks, conference proceedings, encyclopedias and various reference documents.</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9356-copy.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Labs & Workshops</h5>
                          <p>Fully equipped with the newest technology and staff to assist each student.</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="https://sbce.ac.in/wp-content/uploads/2018/07/0016.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Ashoka Auditorium</h5>
                          <p>Large and spacious auditorium which is used to conduct many techno-cultural events.</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9208-copy.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Conference Hall</h5>
                          <p>Multimedia Hall with 'state of the art' facilities such as video conferencing facilities are available.</p>
                        </div>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
