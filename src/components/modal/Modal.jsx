import Modal from 'react-modal';
import PatientForm from './PatientForm';

Modal.setAppElement('#root')

export default function PatientModal({
    isOpen,
    onRequestClose,
    currentAppointmentDate,
    currentPhysioId,
    newPatientLabel,
    currentAppointment,
    selectedPatient,
    isFullForm,
    isReadOnly
}) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={{
                    overlay: {
                        zIndex: 1000,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        width: '500px',
                        margin: 'auto',
                        borderRadius: '10px',
                        border: '1px solid #ccc',
                        height: isFullForm ? '620px' : '350px',
                        padding: '0'
                    }
                }}
            >
                <PatientForm
                    onRequestClose={onRequestClose}
                    currentAppointmentDate={currentAppointmentDate}
                    currentPhysioId={currentPhysioId}
                    newPatientLabel={newPatientLabel}
                    currentAppointment={currentAppointment}
                    selectedPatient={selectedPatient}
                    isFullForm={isFullForm}
                    isReadOnly={isReadOnly}
                />
            </Modal>
            <style jsx='true'>
                {`
                    .ReactModal__Body--open,
                    .ReactModal__Html--open {
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    );
}