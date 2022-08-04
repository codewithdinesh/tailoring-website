import React from 'react'
import Product from "./components/Product"
import Offer from './Offer'
import Overview from './Overview'


export const Main = () => {

    return (
        <>
            <Offer title={"Buy 4 or more tailored items get 20% off"} btn={"Grab it!"} />
            <Offer title={"Buy 2 e tailored items get 10% off"} btn={"Grab it!"} />
            <Overview />
            <div class="container-max">

                <div className="p-2 d-flex flex-sm-row flex-column justify-content-center flex-wrap">

                    <Product name={"Shirt"} description={"Customized shirts"} price={'399/-'} p_link={"/products/shirt"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />

                    <Product name={"Kurta"} description={"Customized Kurtas"} price={'699/-'} p_link={"/products/kurta"} image={"https://4.imimg.com/data4/PB/FH/MY-25278150/mens-fancy-kurta-500x500.jpg"} />

                    <Product name={"Pants"} description={"Customized Pants"} price={'499/-'} p_link={"/products/pants"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />

                    <Product name={"Shorts"} description={"Customized Shorts"} price={'399/-'} p_link={"/products/shorts"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />

                    <Product name={"Jeans"} description={"Custom Tailored Jeans"} price={'1199/-'} p_link={"/products/jeans"} image={"https://cdn.shopify.com/s/files/1/0536/3594/0515/products/f27c4318-dcab-fa97-8f0d-c384a84e4cc0_8-2_4420a46e-ab36-4860-a156-04e2d4f0be3b_400x.jpg?v=1659015644"} />


                </div>
            </div>
        </>

    )

}