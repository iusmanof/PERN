import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar/BrandBar'
import DeviceList from '../components/DeviceList/DeviceList'
import LeftBar from '../components/LeftBar/LeftBar'
import Pages from '../components/Pagination/Pages'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'
import { useActions } from '../store/hooks/authAction'
import { useTypedSelector } from '../store/hooks/TypedSelector'

const Shop = () => {
  const { devices, limit, page, totalCount, isSelectedTypeId,isSelectedBrandsId } = useTypedSelector(state => state.device)
  const { setType, setBrand, setDevice, setTotalCount } = useActions()
    
  useEffect(() => {
        fetchTypes().then(data => setType(data))
        fetchBrands().then(data => setBrand(data))
        fetchDevices(null, null, page, limit).then(data => {
            setDevice(data.rows)
            setTotalCount(data.count)
        })
    }, [])


    useEffect(() => {
        fetchDevices(isSelectedTypeId , isSelectedBrandsId, page, 2).then(data => {
          // console.log(data)
            setDevice(data)
            // setTotalCount(data.count)
        })
    }, [page])
    
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
              <Pages />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Shop
