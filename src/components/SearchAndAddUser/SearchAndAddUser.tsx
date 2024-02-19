import { useState } from "react";
import { AddUserButton, AddUserIcon, SearchAndAddUserContainer, SearchInput } from "./style";
import AddUserModal from "../../modals/AddUserModal/AddUserModal";

interface SearchAndAddUserProps {
  onSearch: (query: string) => void;
  onAddUser: (userData: { name: string; email: string; phone: string }) => void;
}

function SearchAndAddUser({ onSearch, onAddUser }: SearchAndAddUserProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    onSearch(query);
  };

  const handleAddUser = () => {
    setIsModalOpen(true);
  };

  const handleSaveUser = (userData: { name: string; email: string; phone: string }) => {
    onAddUser(userData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SearchAndAddUserContainer>
      <SearchInput type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
      <AddUserButton onClick={handleAddUser}>
        <AddUserIcon /> User
      </AddUserButton>
      <AddUserModal isOpen={isModalOpen} onRequestClose={closeModal} onAddUser={handleSaveUser} onSave={handleSaveUser} />
    </SearchAndAddUserContainer>
  );
}

export default SearchAndAddUser;
