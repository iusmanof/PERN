import { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'
import { IDevices } from '../store/types/device'

const DevicePage = () => {
  const [device, setDevice] = useState<IDevices | null>()
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container>
      <Col md={4}>
        {/* <Image width={300} height={300} src={process.env.REACT_APP_API_URL  + device.img} /> */}
        <Image width={300} height={300} src={device?.img} />
      </Col>
      <Col md={4}>
        <Row>
          <h2>{device?.name}</h2>
          <h4>Rating:{device?.rating}</h4>
        </Row>
      </Col>
      <Col md={4}>
          <h3>Price ($):{device?.price}</h3>
          <Button variant={"outline-dark"}>Добавить в корзину</Button>
      </Col>

      <Row>
        {device?.info.map((info) => {
          return <Row key={info.id}> {info.title}: {info.description}</Row>
        })}
      </Row>
    </Container>
  )
}

export default DevicePage
