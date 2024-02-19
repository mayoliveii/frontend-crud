import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  FormLabel,
  FormInput,
  FormButton,
  CloseButton,
} from "./style";
import apiService from "../../apiServices/apiService";
import { User } from "../../components/UsersTable/UsersTable";

interface AddUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddUser: (user: User) => void;
  onSave: (user: User) => void;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
}
function AddUserModal({ isOpen, onRequestClose, onSave }: AddUserModalProps) {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
  });

  const [isAddingUser, setIsAddingUser] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setUserData({ name: "", email: "", phone: "" });
  };

  const validateInputs = () => {
    const errors: string[] = [];

    if (!userData.name.trim()) {
      errors.push("Name is required.");
    }

    if (!userData.email.trim()) {
      errors.push("Email is required.");
    } else if (!isValidEmail(userData.email)) {
      errors.push("Invalid email format.");
    }

    if (!userData.phone.trim()) {
      errors.push("Phone is required.");
    } else if (!isValidPhone(userData.phone)) {
      errors.push("Invalid phone format. Please use (XX) X XXXX-XXXX.");
    }

    return errors;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone: string) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
  };

  const handleAddUser = async () => {
    if (isAddingUser) {
      return;
    }

    setIsAddingUser(true);
    window.location.reload();
    try {
      const validationErrors = validateInputs();

      if (validationErrors.length > 0) {
        alert(validationErrors.join("\n"));
        return;
      }

      const newUser = await apiService.createCustomer(userData);

      onSave(newUser);

      resetForm();
      onRequestClose();
    } catch (error) {
      alert(`Failed to add user. Please try again. Error: ${error}`);
    } finally {
      setIsAddingUser(false);
    }
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onRequestClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Add new user</ModalTitle>
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
            <FormButton type="button" onClick={handleAddUser}>
              Add user
            </FormButton>
            <CloseButton type="button" onClick={onRequestClose}>
              Close
            </CloseButton>
          </div>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AddUserModal;