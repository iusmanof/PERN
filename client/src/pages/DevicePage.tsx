import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

const DevicePage = () => {
  const device = {id: 1, name: 'Iphone 12 Pro', price: 120, rating: 5, img: '6ed8b842-1057-4a73-9574-c600c70f7773.jpg'}
  const description = [
    {id: 1, title: 'Оперативная память', description: '5 Gb'},
    {id: 2, title: 'Камера', description: '12 Мп'},
    {id: 3, title: 'Процессор', description: 'Intel'},
    {id: 4, title: 'Цвет', description: 'red'},
    {id: 5, title: 'Акб', description: '3000mAh'},
  ]

  return (
    <Container>
      <Col md={4}>
        <Image width={300} height={300} src={device.img} />
      </Col>
      <Col md={4}>
        <Row>
          <h2>{device.name}</h2>
          <h4>Rating:{device.rating}</h4>
        </Row>
      </Col>
      <Col md={4}>
          <h3>Price ($):{device.price}</h3>
          <Button variant={"outline-dark"}>Добавить в корзину</Button>
      </Col>

      <Row>
        {description.map((info) => {
          return <Row key={info.id}> {info.title}: {info.description}</Row>
        })}
      </Row>
    </Container>
  )
}

export default DevicePage
