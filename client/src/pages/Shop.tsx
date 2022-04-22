import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar/BrandBar'
import DeviceList from '../components/DeviceList/DeviceList'
import LeftBar from '../components/LeftBar/LeftBar'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'
import { useActions } from '../store/hooks/authAction'
import { useTypedSelector } from '../store/hooks/TypedSelector'

const Shop = () => {
  const { types, devices, brands } = useTypedSelector(state => state.device)
  const { setType } = useActions()
  
  useEffect(() => {
        fetchTypes().then(data => setType(data))
        // fetchBrands().then(data => device.setBrands(data))
        // fetchDevices(null, null, 1, 2).then(data => {
        //     device.setDevices(data.rows)
        //     device.setTotalCount(data.count)
        // })
    }, [])

    // useEffect(() => {
    //     fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
    //         device.setDevices(data.rows)
    //         device.setTotalCount(data.count)
    //     })
    // }, [device.page, device.selectedType, device.selectedBrand,])
    
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
