import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useTypedSelector } from '../../store/hooks/TypedSelector'
import { useActions } from '../../store/hooks/authAction'

const LeftBar = () => {
  const { types, isSelectedTypeId } = useTypedSelector(state => state.device)
  const { setSelectedType } = useActions()

  return (
    <div>
      <ListGroup>
        {types.map((type) =>
          <ListGroup.Item 
            style={{cursor: 'pointer'}}
            active={type.id === isSelectedTypeId}
            onClick={() => setSelectedType(type.id)}
            key={type.id}>
            {type.name}
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  )
}

export default LeftBar
