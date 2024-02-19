import { ModalOverlay, ModalContent, ModalTitle, FormButton, CloseButton } from "./style";
import apiService from "../../apiServices/apiService";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onDelete: () => void;
  customerId: string;
}

function ConfirmDeleteModal({
  isOpen,
  onRequestClose,
  onDelete,
  customerId
}: ConfirmDeleteModalProps) {

  const handleDelete = async () => {
    await apiService.deleteCustomer(customerId);
    onDelete();
    onRequestClose();
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onRequestClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Confirm Delete</ModalTitle>
        <p>Are you <b>sure</b> you want to delete this user?</p>
        <div>
          <FormButton type="button" onClick={handleDelete}>
            Confirm Delete
          </FormButton>
          <CloseButton type="button" onClick={onRequestClose}>
            Cancel
          </CloseButton>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ConfirmDeleteModal;
