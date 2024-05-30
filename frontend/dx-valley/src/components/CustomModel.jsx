import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CustomModal() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ display: 'none' }} id="modalButton">
        Launch modal
      </Button>

      <Modal show={show} onHide={handleClose} id="myModal">
        <Modal.Header closeButton>
          <Modal.Title>Technical Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/laptop.jpg" alt="Laptop" className="img-responsive" />
          <p>Ut enim ad minima veniam, quis nostrum 
            exercitationem ullam corporis suscipit laboriosam, 
            nisi ut aliquid ex ea commodi consequatur? Quis autem 
            vel eum iure reprehenderit qui in ea voluptate velit 
            esse quam nihil molestiae consequatur, vel illum qui 
            dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;