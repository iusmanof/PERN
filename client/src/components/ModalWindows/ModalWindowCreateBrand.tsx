import React, { FC } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { IModalWindowProps } from './IModalWindow'

const ModalWindowCreateBrand: FC<IModalWindowProps> = ({show, onHide}) => {
  return (
   <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить брэнда</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder={"Введите название брэнда"} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="variant-danger" onClick={onHide}>Close</Button>
          <Button variant="variant-success" onClick={onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalWindowCreateBrand
