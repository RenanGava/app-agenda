import Modal from 'react-modal'
import { ReactNode, useState } from 'react'

interface RegisterModalProps {
    children: ReactNode
}

export function RegisterModal({ children }: RegisterModalProps) {

    const [open, setOpen] = useState(false)

    return (
        <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
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
                    margin: '0 auto',
                    padding: 0,
                    overflow: 'hidden',
                    maxWidth: '500px'
                }
            }}
        >
            {children}
        </Modal>
    )
}