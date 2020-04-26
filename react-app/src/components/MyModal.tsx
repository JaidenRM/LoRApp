import React, { FunctionComponent } from 'react'
import { 
    Container, Row, Col
    , Modal, ModalBody, ModalFooter, ModalHeader
    , Button
} from 'reactstrap'
import { useState } from 'react'

interface ModalProps {
    openModalText: string;
    closeModalText: string;
    className: string;
    modalTitle: string;
    modalBody: string;
}

const MyModal: FunctionComponent<ModalProps> = props => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev);

    return (
        <Container className={`my-modal_wrapper ${props.className}`}>
            <Row>
                <Button onClick={toggle} className="my-modal_open-btn">{props.openModalText}</Button>
                <Modal isOpen={open} toggle={toggle} className="my-modal">
                    <ModalHeader toggle={toggle} className="my-modal__header">
                        {props.modalTitle}
                    </ModalHeader>
                    <ModalBody className="my-modal__body">
                        {props.modalBody}
                    </ModalBody>
                    <ModalFooter className="my-modal__footer">
                        <Button onClick={toggle} className="my-modal__footer-close-btn">
                            {props.closeModalText}
                        </Button>
                    </ModalFooter>
                </Modal>
            </Row>
        </Container>
    )
}

MyModal.defaultProps = {
    openModalText: "Open",
    closeModalText: "Close",
    className: "",
    modalBody: "",
    modalTitle: ""
}

export default MyModal;