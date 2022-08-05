import React from 'react'
import Product from "../components/Product"
import Offer from '../components/Offer'
import Overview from '../components/Overview'
import "../style/Main.css"


export const Main = () => {

    return (
        <>
            {/* <Offer title={"Buy 4 or more tailored items get 20% off"} btn={"Grab it!"} /> */}
            <Offer title={"Buy 2 e tailored items get 10% off"} btn={"Grab it!"} />
            <Overview />
            <div class="container-max">

                <h3 class="services">Services We Offer</h3>

                {/* Services */}
                <div className="p-2 d-flex flex-sm-row flex-column justify-content-center flex-wrap">

                    <Product name={"Shirt"} description={"Customized shirts"} price={'399/-'} p_link={"/products/shirt"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />

                    <Product name={"Kurta"} description={"Customized Kurtas"} price={'699/-'} p_link={"/products/kurta"} image={"https://4.imimg.com/data4/PB/FH/MY-25278150/mens-fancy-kurta-500x500.jpg"} />

                    <Product name={"Pants"} description={"Customized Pants"} price={'499/-'} p_link={"/products/pants"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />

                    <Product name={"Shorts"} description={"Customized Shorts"} price={'399/-'} p_link={"/products/shorts"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />

                    <Product name={"Jeans"} description={"Custom Tailored Jeans"} price={'1199/-'} p_link={"/products/jeans"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />


                </div>

                <h3>How it Works</h3>

                <div className='how-its-works container'>
                    <p className='steps'>
                        1. Once you place an order with us, we'll schedule a pickup of your fabric from your home. If you don’t have fabric, We can help you find the best fabric for you.   </p>
                    <p className='steps'>
                        2. Next, a dedicated fashion designer will help you style your fabric. You can choose to speak with them on video call or have them visit your home.
                    </p>
                    <p className='steps'>

                        3. Once the design is confirmed, we'll stitch the garment & ship it to your home under 5-10 working days.
                    </p>
                    <p className='steps'>
                        4. Alterations, if any, are taken care free of charge.
                    </p>
                </div>

            </div>
        </>

    )

}