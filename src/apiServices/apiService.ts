import axios from 'axios';

interface CustomerData {
  name: string;
  email: string;
  phone: string;
}

interface ListCustomersParams {
  orderBy?: 'created_at_ASC' | 'created_at_DESC';
  startDate?: string;
  endDate?: string;
  search?: string;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const apiService = {
  getAllCustomers: async (params: ListCustomersParams) => {
    try {
      const response = await api.get('/list-customers', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  createCustomer: async (customerData: CustomerData) => {
    try {
      const response = await api.post('/create-customer', customerData);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  },
  editCustomer: async (customerId: string, customerData: CustomerData) => {
    try {
      const response = await api.post(`/edit-customer`, { id: customerId, ...customerData });
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  },
  getCustomerById: async (customerId: string, customerData: CustomerData) => {
    try {
      const response = await api.post(`/get-customer-by-id?id=${customerId}`, customerData);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  },
  deleteCustomer: async (customerId: string) => {
    try {
      const response = await api.post(`/delete-customer`, { id: customerId });
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  },
  searchCustomers: async (searchTerm: string, params: ListCustomersParams) => {
    try {
      const response = await api.get('/list-customers', { params: { ...params, search: searchTerm } });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};

const handleApiError = (error: any) => {
  if (error.response) {
    throw new Error(`Error from server: ${error.response.data}`);
  }

  if (error.request) {
    throw new Error(`No response from server: ${error.request}`);
  }

  if (error.message) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default apiService;
