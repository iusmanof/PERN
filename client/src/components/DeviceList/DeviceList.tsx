import { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useActions } from '../../store/hooks/authAction'
import { useTypedSelector } from '../../store/hooks/TypedSelector'
import DeviceItem from './DeviceItem'

const DeviceList = () => {
  const { devices } = useTypedSelector(state => state.device)
  const { setType, setBrand, setDevice, setTotalCount } = useActions()

  return (
    <div>
      <Row>
        {devices.map((device) => {
          return <DeviceItem key={device.id} device={device} />
        })}        
      </Row>
    </div>
  )
}

export default DeviceList
