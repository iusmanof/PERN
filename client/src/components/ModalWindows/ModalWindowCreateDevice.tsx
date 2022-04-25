import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { createKeywordTypeNode } from 'typescript'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI'
import { useActions } from '../../store/hooks/authAction'
import { useTypedSelector } from '../../store/hooks/TypedSelector'
import { IModalWindowProps } from './IModalWindow'

interface IInfo {
  title: string
  description: string
  number: number
  [key: string]: string | number;
}

const ModalWindowCreateDevice:FC<IModalWindowProps> = ({show, onHide}) => {
  const { types, brands, isSelectedBrandsId, isSelectedTypeId } = useTypedSelector(state => state.device)
  const { setSelectedType, setSelectedBrand } = useActions()
  const [type, setType] = useState<string>()
  const [brand, setBrand] = useState<string>()
  const [info, setInfo] = useState<Array<IInfo>>([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState<File | string | Blob>('')
  
  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number: number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0]
    setFile(file)
  }

  const changeInfo = (key: string, value: string , number: number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', isSelectedBrandsId.toString())
    formData.append('typeId', isSelectedTypeId.toString())
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())
  }

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить ДЕВАЙСА</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>{type || "Выберите тип"}</Dropdown.Toggle>
              <Dropdown.Menu>
                {types.map(type =>
                  <Dropdown.Item 
                   onClick={() => {
                     setSelectedType(type.id)
                     setType(type.name)
                   }
                  }
                   key={type.id}
                  >
                    {type.name}
                    </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
             <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>{brand || "Выберите бренд"}</Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map(brand =>
                  <Dropdown.Item 
                    onClick={() => {
                      setSelectedBrand(brand.id)
                      setBrand(brand.name)
                    }}
                    key={brand.id}>
                      {brand.name}
                    </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-3"
              placeholder="Введите название устройств"
            />
             <Form.Control
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="mt-3"
              placeholder="Введите стоимость устройств"
            />
             <Form.Control
              className="mt-3"
              type="file"
              onChange={() => selectFile}
            />
          </Form>
          <Button variant="variant-success" onClick={addInfo}>добавить новое свойство</Button>
           {info.map(i => 
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder='Введите название свойств'
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
          <Button variant="variant-success" onClick={addDevice}>add</Button>
          {/* <Button variant="variant-success" onClick={onHide}>close</Button> */}
        </Modal.Footer>
      </Modal>
  )
}

export default ModalWindowCreateDevice
