import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useActions } from '../../store/hooks/authAction'
import { useTypedSelector } from '../../store/hooks/TypedSelector'

const BrandBar = () => {
  const { brands, isSelectedBrandsId } = useTypedSelector(state => state.device)
  const { setSelectedBrand } = useActions()

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
