import { FC } from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { IDeviceProps } from './IDeviceProps'
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../utils/consts';

const DeviceItem: FC<IDeviceProps> = ({device}) => {
  const history = useNavigate() 

  return (
    <Col md={3}>
        <Card style={{ width: 200, cursor: 'pointer'}} onClick = {() => history(DEVICE_ROUTE  + '/' + device.id)} >
            <Image width={150} height={150} src={device.img}/>
            <div className='d-flex justify-content-between aligh-items-center'>
                <div>{device.name}</div>
                <div>Price ($):{device.price}</div>
                <div>Rating:{device.rating}</div>
            </div>           
        </Card>
    </Col>
  )
}

export default DeviceItem
