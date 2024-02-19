import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import SearchAndAddUser from "./components/SearchAndAddUser/SearchAndAddUser";
import UsersTable, { User } from "./components/UsersTable/UsersTable";
import apiService from "./apiServices/apiService";
import { UserData } from "./modals/AddUserModal/AddUserModal";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [defaultFilter, setDefaultFilter] = useState<string>("Smallest to Largest");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAdd = async (userData: UserData) => {
    try {
      const newUser = await apiService.createCustomer(userData);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      showErrorMessage("Failed to add user. Please try again.", error);
    }
  };

  const handleEdit = async (user: User) => {
    try {
      const userEdited = await apiService.editCustomer(user.id, user);
      setUsers((prevUsers) => prevUsers.map((existingUser) => (existingUser.id === userEdited.id ? userEdited : existingUser)));
      showAlert(`User ${userEdited.name} edited successfully!`);
    } catch (error) {
      showErrorMessage("Failed to edit user. Please try again.", error);
    }
  };

  const handleFilterSelect = (selectedFilter: string, startDate: Date | null, endDate: Date | null) => {
    setDefaultFilter(selectedFilter);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const showErrorMessage = (message: string, error: any) => {
    alert(`${message} Error: ${error}`);
  };

  const showAlert = (message: string) => {
    alert(message);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Filter onFilterSelect={handleFilterSelect} />
        <SearchAndAddUser onSearch={handleSearch} onAddUser={handleAdd} />
        <UsersTable
          users={users}
          onEditUser={handleEdit}
          filter={defaultFilter}
          startDate={startDate}
          endDate={endDate}
          searchQuery={searchQuery}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
