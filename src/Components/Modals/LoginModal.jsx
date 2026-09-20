import React from 'react'
import { Modal, ModalHeader } from 'react-bootstrap'
import { useState } from 'react'

const LoginModal = () => {
    const [show, setShow] = useState(false)
    return (
        <div>

            <Modal
                show={show}
                onHide={() => {
                    setShow(false)
                }}

                centered
                >

<ModalHeader>
    
</ModalHeader>

            </Modal>


        </div>
    )
}

export default LoginModal