import React from "react";
import "../style/Product-page.css";
import Faq from "./Faq";
import { useLocation, useParams } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  // const { product} = location.state;

  const productID = useParams();
  console.log(productID);

  // Api request for /product/:productID
  // if present then show product
  // else show product not found page
  

  const product = {
    title: "Jeans",
    description: "Ripped Jeans by Joh",
    price: "600",
    mrp_price: "1000",
    cloth_type: "Ripped Jeans",
    img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1lbiUyMGplYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    productID: "10",
  };


  return (
    <div className="container">
      <div
        class="container mt-2 mb-2"
        style={{ backgdroundColor: "#fff" }}
        tore
        fetch
      >
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div
              class="card text-black bg-white product-container"
              style={{ borderRadius: "25px" }}
            >
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <div className="img-fluid ">
                      <img
                        src={product.img}
                        className="product-img"
                        alt="login"
						
                      />
                    </div>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 align-items-center order-2 order-lg-2">
                    <div class="card-body">
                      <p class="product-title h3">{product.title}</p>
                      <p class="type-colth">{product.cloth_type}</p>
                      <h3 class="product-price ">
                        Buy Now Only @ {product.price}
                      </h3>
                      <h3 class="product-price delete">
                        MRP {product.mrp_price}
                      </h3>
                      <p className="product-description">
                        {product.description}
                      </p>

                      <div class="d-flex justify-content-between align-items-center">
                        <div class="product-card-button px-3 text-center h3">
                          cart
                          <svg
                            class="svg-icon"
                            viewBox="0 0 20 20"
                            width="45"
                            height="45"
                          >
                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                          </svg>
                        </div>

                        <button
                          type="button"
                          class="btn btn-primary mx-md-5 buy-now"
                        >
                          Buy now
                        </button>
                      </div>

                      <ul id="features">
                        <li>Free shipping over Rs.600</li>
                        <li>Fit guarantee.</li>
                        <li>Free Alterations!</li>
                        <li>Buy 2 get flat 30% off!</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Product;
