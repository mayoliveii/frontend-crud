import React, { useState } from "react";
import { ModalOverlay, ModalContent, ModalTitle, FormLabel, FormInput, FormButton, CloseButton } from "./style";
import apiService from "../../apiServices/apiService";
import { User } from "../../components/UsersTable/UsersTable";

interface EditUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (user: User) => void;
  onEditUser: (user: User) => void;
  customerId: string;
}

function EditUserModal({
  isOpen,
  onRequestClose,
  onSave,
  customerId
}: EditUserModalProps) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateInputs = () => {
    const { name, email, phone } = userData;
    const errors: string[] = [];

    if (!name.trim()) {
      errors.push("Name is required.");
    }

    if (!email.trim()) {
      errors.push("Email is required.");
    } else if (!isValidEmail(email)) {
      errors.push("Invalid email format.");
    }

    if (!phone.trim()) {
      errors.push("Phone is required.");
    } else if (!isValidPhone(phone)) {
      errors.push("Invalid phone format. Please use (XX) X XXXX-XXXX.");
    }

    return errors;
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^\d{11}$/.test(phone);

  const handleEditUser = async () => {
    try {
      const validationErrors = validateInputs();

      if (validationErrors.length > 0) {
        alert(validationErrors.join("\n"));
        return;
      }

      const userEdited = await apiService.editCustomer(customerId, userData);
      onSave(userEdited);
      resetForm();
      onRequestClose();
    } catch (error) {
      alert(`Failed to edit user. Please try again. Error: ${error}`);
    }
  };

  const resetForm = () => setUserData({ name: "", email: "", phone: "" });

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onRequestClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Edit user</ModalTitle>
        <form>
          <div>
            <FormLabel>Name:</FormLabel>
            <FormInput
              type="text"
              name="name"
              placeholder="John Doe"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel>Email:</FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="user.example@gmail.com"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel>Phone:</FormLabel>
            <FormInput
              type="text"
              name="phone"
              placeholder="(XX) X XXXX-XXXX"
              value={userData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormButton type="button" onClick={handleEditUser}>
              Edit user
            </FormButton>
            <CloseButton type="button" onClick={onRequestClose}>
              Close
            </CloseButton>
          </div>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditUserModal;
