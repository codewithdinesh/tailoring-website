import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const SModal = (props) => {

  return (
    <div>
      
      {/* // passing in the isOpen prop from the container */}
      <Modal show={props.isOpen}>

        <Modal.Header className='d-block'>
          <Modal.Title>Order Now</Modal.Title>
          <h6 className='mb-2'> Few Steps To Complete Your Order ! </h6>

        </Modal.Header>

        <Modal.Body >


          <div className='size mb-3'>
            Choose Size:

            <Form.Select aria-label="Default select example">
              <option >Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>

            </Form.Select>

          </div>

          <div className='fibric '>
            Fibric Type:

            <Form.Select aria-label="Default select example" >
              <option >Choose Fibric</option>
              <option value="cotton">Cotton</option>
              <option value="polyester">Polyester</option>
              <option value="nylon">Nylon</option>
              <option value="rayon">Rayon</option>
              <option value="denim">Denim</option>
              <option value="Lycra">Lycra</option>

            </Form.Select>

          </div>

          <div className="description mt-2">
            Description For your Order:
            <input type="text" id="desc" className="form-control" placeholder='Description' />
          </div>

        </Modal.Body>

        <Modal.Footer>

          passing in the toggle function so that clicking the OK button closes the modal

          <Button variant="primary" onClick={props.toggle}>Cancel</Button>

          <Button variant="primary" onClick={props.toggle}>Order</Button>

        </Modal.Footer>

      </Modal>
    </div>
  )
}

export default SModal;