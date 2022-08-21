import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Offer from "../components/Offer";
import Overview from "../components/Overview";
import "../style/Main.css";
import Footer from "../components/Footer";

const products = [
  {
    title: "Jeans",
    description: "We design customise Ripped Jeans As per your Specification",
    price: "600",
    mrp_price: "1000",
    subtitle: "Ripped Jeans",
    img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1lbiUyMGplYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    productID: "10",
    rating: "4.3",
    rating_count: "10"
  },

  {
    title: "Jeans",
    description: "We design customise Ripped Jeans As per your Specification",
    price: "600",
    mrp_price: "1000",
    subtitle: "Ripped Jeans",
    img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1lbiUyMGplYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    productID: "10",
    rating: "4.3",
    rating_count: "10"
  },
];




export const Main = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);


  // API request for fetching products from DB
  const fetchProduct = async () => {
    let headersList = {
      "Accept": "*/*",
  
    }

    let response = await fetch("http://localhost:5000/products", {
      method: "GET",
      headers: headersList
    });

    let data = await response.json();
    console.log(data);
    setProduct(data);
  }

  return (
    <>
      {/* <Offer title={"Buy 4 or more tailored items get 20% off"} btn={"Grab it!"} /> */}
      <Offer title={"Buy 2 e tailored items get 10% off"} btn={"Grab it!"} />
      <Overview />
      <div className="container-max">
        <h3 className="services">Services We Offer</h3>


        {/* Services */}
        <div className="p-2 d-flex flex-sm-row flex-column justify-content-center flex-wrap">
          {product.map((item) => {
            return <Product product={item} />;
          })}
        </div>

        {/* How it works */}
        <h3>How it Works</h3>

        <div className="how-its-works container">
          <p className="steps">
            1. Once you place an order with us, we'll schedule a pickup of your
            fabric from your home. If you don’t have fabric, We can help you
            find the best fabric for you.{" "}
          </p>
          <p className="steps">
            2. Next, a dedicated fashion designer will help you style your
            fabric. You can choose to speak with them on video call or have them
            visit your home.
          </p>
          <p className="steps">
            3. Once the design is confirmed, we'll stitch the garment & ship it
            to your home under 5-10 working days.
          </p>
          <p className="steps">
            4. Alterations, if any, are taken care free of charge.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
