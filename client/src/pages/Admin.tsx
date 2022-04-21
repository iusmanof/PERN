import { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModalWindowCreateBrand from '../components/ModalWindows/ModalWindowCreateBrand'
import ModalWindowCreateDevice from '../components/ModalWindows/ModalWindowCreateDevice'
import ModalWindowCreateType from '../components/ModalWindows/ModalWindowCreateType'

const Admin = () => {
  const [modalWindowCreateBrandVisible, setModalWindowCreateBrandVisible] = useState(false)
  const [modalWindowCreateDeviceVisible, setModalWindowCreateDeviceVisible] = useState(false)
  const [modalWindowCreateTypeVisible, setModalWindowCreateTypeVisible] = useState(false)

  return (
    <div>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setModalWindowCreateBrandVisible(true)}>Добавить Брэнд</Button>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setModalWindowCreateDeviceVisible(true)}>Добавить Device</Button>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setModalWindowCreateTypeVisible(true)}>Добавить тип</Button>

      <ModalWindowCreateBrand show={modalWindowCreateBrandVisible} onHide={() => {setModalWindowCreateBrandVisible(false)}}/>
      <ModalWindowCreateDevice show={modalWindowCreateDeviceVisible} onHide={() => {setModalWindowCreateDeviceVisible(false)}}/>
      <ModalWindowCreateType show={modalWindowCreateTypeVisible} onHide={() => {setModalWindowCreateTypeVisible(false)}}/>
    </div>
  )
}

export default Admin
