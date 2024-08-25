import axios from 'axios';

const API_URL = 'http://localhost:5000/api/weddings'


// Fetch all weddings
export const getWeddings = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching weddings:', error);
        throw error;
    }
};


// Fetch a wedding by ID
export const getWeddingById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching wedding by ID:', error);
        throw error;
    }
};

// Add a new wedding
export const postWedding = async (weddingData) => {
    try {
        const response = await axios.post(API_URL, weddingData);
        return response.data;
    } catch (error) {
        console.error('Error adding wedding:', error);
        throw error;
    }
};

// Update a wedding by ID
export const putWedding = async (id, weddingData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, weddingData);
        return response.data;
    } catch (error) {
        console.error('Error updating wedding:', error);
        throw error;
    }
};

// Delete a wedding by ID
export const deleteWedding = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting wedding:', error);
        throw error;
    }
};