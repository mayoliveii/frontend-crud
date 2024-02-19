import { useEffect, useState } from 'react';
import { TableContainer, TableHeader, TableCell, EditButton, EditUserIcon, DeleteButton, DeleteUserIcon } from './style';
import EditUserModal from '../../modals/EditUserModal/EditUserModal';
import apiService from '../../apiServices/apiService';
import ConfirmDeleteModal from '../../modals/ConfirmDeleteModal/ConfirmDeleteModal';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface UsersTableProps {
  users: User[];
  onEditUser: (user: User) => void;
  filter: string;
  startDate: Date | null;
  endDate: Date | null;
  searchQuery: string;
}

function UsersTable({
  users: initialUsers,
  filter,
  startDate,
  endDate,
  searchQuery,
}: UsersTableProps) {
  const [state, setState] = useState({
    users: initialUsers,
    isModalOpen: false,
    selectedUser: null as User | null,
    isConfirmDeleteModalOpen: false,
  });

  const { users, isModalOpen, selectedUser, isConfirmDeleteModalOpen } = state;

  const updateState = (newState: Partial<typeof state>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const handleEditClick = (user: User) => {
    updateState({ selectedUser: user, isModalOpen: true });
  };

  const handleDeleteClick = (user: User) => {
    updateState({ selectedUser: user, isConfirmDeleteModalOpen: true });
  };

  const handleSaveUser = async () => {
    updateState({ isModalOpen: false });
    fetchData();
  };

  const closeModal = () => {
    updateState({ isModalOpen: false, isConfirmDeleteModalOpen: false });
  };

  const handleEditUser = (user: User) => {
    updateState({ isModalOpen: true, selectedUser: user });
  };

  const fetchData = async () => {
    try {
      const data = await apiService.getAllCustomers({
        orderBy: filter === 'Smallest to Largest' ? 'created_at_DESC' : 'created_at_ASC',
        startDate: startDate?.toISOString(),
        endDate: endDate?.toISOString(),
        search: searchQuery,
      });
      updateState({ users: data });
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter, startDate, endDate, searchQuery]);

  return (
    <>
      <TableContainer>
        <TableHeader>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Updated At</TableCell>
          <TableCell>Deleted At</TableCell>
          <TableCell></TableCell>
        </TableHeader>
        {users.map((user) => (
          <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.created_at}</TableCell>
            <TableCell>{user.updated_at}</TableCell>
            <TableCell>{user.deleted_at}</TableCell>
            <TableCell>
              <EditButton onClick={() => handleEditClick(user)}>
                <EditUserIcon />
              </EditButton>
              <DeleteButton onClick={() => handleDeleteClick(user)}>
                <DeleteUserIcon />
              </DeleteButton>
            </TableCell>
          </div>
        ))}
      </TableContainer>

      {selectedUser && (
        <EditUserModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onEditUser={handleEditUser}
          onSave={handleSaveUser}
          customerId={selectedUser.id}
        />
      )}

      {selectedUser && (
        <ConfirmDeleteModal
          isOpen={isConfirmDeleteModalOpen}
          onRequestClose={closeModal}
          onDelete={handleSaveUser}
          customerId={selectedUser.id}
        />
      )}
    </>
  );
}

export default UsersTable;
