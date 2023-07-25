import Modal from 'react-modal'
import { ReactNode, useState } from 'react'

interface RegisterModalProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void
}

export function ModalComponent({ children, isOpen, setIsOpen }: RegisterModalProps) {

    

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(233, 159, 202, 0.8)',
                },
                content:{
                    margin: '10rem auto 0 auto',
                    padding: 0,
                    height:  "560px",
                    overflow: 'hidden',
                    maxWidth: '500px'
                }
            }}
        >
            {children}
        </Modal>
    )
}