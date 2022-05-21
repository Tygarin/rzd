import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface modalProps {
    closeModal: Function,
    text: string
}

export default function ModalForm(props: modalProps) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={true}
            onClose={() => props.closeModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Оповещение
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {props.text}
                </Typography>
            </Box>
        </Modal>
    )
}