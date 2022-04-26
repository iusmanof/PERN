import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { fetchDevices } from '../../http/deviceAPI'
import { useActions } from '../../store/hooks/authAction'
import { useTypedSelector } from '../../store/hooks/TypedSelector'

const BrandBar = () => {
  const { brands, isSelectedBrandsId, page, limit } = useTypedSelector(state => state.device)
  const { setSelectedBrand, setDevice } = useActions()

  return (
    <Row style={{display: 'flex', flexDirection: 'row'}}>
      {brands.map(brand =>
        <Card 
          border={brand.id === isSelectedBrandsId ? 'danger' : 'light'}
          onClick={() => setSelectedBrand(brand.id)}
          key={brand.id} 
          style={{width: "auto", cursor: "pointer"}}>
            {brand.name}
        </Card>  
      )}
    </Row>
  )
}

export default BrandBar
