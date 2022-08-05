import React from 'react'

const Product = ({ product }) => {
    return (

        <div className='container'>

            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card m-3 bg-white">

                        <div class="row g-0">
                            <div class="col-md-4 product-img">
                                <img
                                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                                    alt="product-img"
                                    class="img-fluid rounded-start"
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Ripped Jeans</h5>
                                    <p class="card-text">
                                        Ripped Jeans By Zara. NavyBlue Shade.
                                    </p>
                                    <p class="card-text">
                                        <small class="text-muted">Price Last updated 3 mins ago</small>
                                    </p>
                                    <h5 class="card-title">Order now at just 799/-</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product