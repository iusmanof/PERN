import { Row } from 'react-bootstrap'
import { useTypedSelector } from '../../store/hooks/TypedSelector'
import DeviceItem from './DeviceItem'

const DeviceList = () => {
  const { devices } = useTypedSelector(state => state.device)
  
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
