import React, { FC, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createType } from '../../http/deviceAPI'
import { IModalWindowProps } from './IModalWindow'

const ModalWindowCreateType: FC<IModalWindowProps> = ({show, onHide}) => {
  const [value, setValue] = useState<string>()
  const addType = () => {
    createType({name: value}).then(data => {
      setValue('')
      onHide()
    })
  }

  return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить Тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control 
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder={"Введите название типа"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="variant-danger" onClick={onHide}>Close</Button>
          <Button variant="variant-success" onClick={addType}>Add</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalWindowCreateType
