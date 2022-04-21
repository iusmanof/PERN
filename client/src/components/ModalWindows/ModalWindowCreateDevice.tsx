import { FC, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { isNumber } from 'util'
import { useTypedSelector } from '../../store/hooks/TypedSelector'
import { IModalWindowProps } from './IModalWindow'

interface IInfo {
  title: string
  description: string
  number: number
}
type IInfoType = IInfo | { title: string; description: string; number: number; }

const ModalWindowCreateDevice:FC<IModalWindowProps> = ({show, onHide}) => {
  const { types, brands } = useTypedSelector(state => state.device)
  const [info, setinfo] = useState<Array<IInfoType>>([])

  const addInfo = () => {
    setinfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number: number) => {
    setinfo(info.filter(i => i.number !== number))
  }

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить ДЕВАЙСА</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {types.map(type =>
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
             <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map(brand =>
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="mt-3"
              placeholder="Введите название устройств"
            />
             <Form.Control
              className="mt-3"
              placeholder="Введите стоимость устройств"
            />
             <Form.Control
              className="mt-3"
              type="file"
            />
          </Form>
          <Button variant="variant-success" onClick={addInfo}>добавить новое свойство</Button>
           {info.map(i => 
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder='Введите название свойств'
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder='Введите описание свойств'
                />
              </Col>
              <Col md={4}>
                <Button 
                  variant={"outline-danger"}
                  onClick={() => removeInfo(i.number)}>
                  Удалить
                </Button>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="variant-success" onClick={onHide}>add</Button>
          <Button variant="variant-success" onClick={onHide}>close</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalWindowCreateDevice
