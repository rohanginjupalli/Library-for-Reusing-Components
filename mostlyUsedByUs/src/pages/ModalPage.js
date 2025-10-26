import Modal from '../components/Modal'
import Button from '../components/Button'
import { useState } from 'react'
function ModalPage() {
  const [showModal,setShowModal] = useState(false);

  const handleClick = ()=>{
    setShowModal(!showModal);
  }

  const handleClose = ()=>{
    setShowModal(false)
  }

  const actionBar = <Button primary onClick={handleClose} >I Accept</Button>
  const modal = <Modal 
    onClose={handleClose} 
    actionBar={actionBar} >
    <p>
      Here is an important agreement for you to accept
    </p>
    </Modal>

  return (
    <div className='relative'>
      <Button primary rounded onClick={handleClick} >
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage