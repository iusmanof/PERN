import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar/BrandBar'
import DeviceList from '../components/DeviceList/DeviceList'
import LeftBar from '../components/LeftBar/LeftBar'
import { useTypedSelector } from '../store/hooks/TypedSelector'

const Shop = () => {
  const { types, devices, brands } = useTypedSelector(state => state.device)

  return (
    <div>
      <Container>
        <Row>
            <Col md={3}>
              <LeftBar />
            </Col>
            <Col md={9}>
              <BrandBar />
              <DeviceList />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Shop
