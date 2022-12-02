import { Button, Modal } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';

const ConfirmationModal = ({
  showConfirmationModal,
  setShowConfirmationModal,
  title,
  refetch,
  doctor,
}) => {
  const successAction = doctor => {
    fetch(`http://localhost:5000/doctor/${doctor._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `baerer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          setShowConfirmationModal(false);

          refetch();

          toast.success(`Dr. ${doctor.name} deleted successfully`);
        }
      });
  };

  return (
    <Modal
      show={showConfirmationModal}
      onClose={() => setShowConfirmationModal(false)}
    >
      <Modal.Header>{title}</Modal.Header>

      <Modal.Footer>
        <Button onClick={() => successAction(doctor)}>Yes!!</Button>
        <Button color="gray" onClick={() => setShowConfirmationModal(false)}>
          No!!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
