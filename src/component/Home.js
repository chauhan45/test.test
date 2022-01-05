import React from 'react';
import image from '../images/image1.jpeg'
import image1 from '../images/image6.jpg'
import image2 from '../images/image2.jpeg'
import logo from '../images/logo.png'

export const Home = () => {
    return (
        <>
             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>FENTA VIDEO</h3>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>FENTA VIDEO</h3>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>FENTA VIDEO</h3>
              <p>Some representative placeholder content for the third slide.</p>
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


     {/* hdsfkshkgd */}


     <div class="container mt-5">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    )
}
