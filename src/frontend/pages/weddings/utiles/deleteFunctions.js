import { deleteWedding } from './api';

//Delete Button
export const handleDelete = async (id, weddings, setWeddings, applyFilters) => {
    try {
        await deleteWedding(id); // delete the wedding from the database
        const updatedWeddings = weddings.filter(wedding => wedding._id !== id);
        setWeddings(updatedWeddings); // delete the wedding from the wedding list
        applyFilters(updatedWeddings); //  delete the wedding from the filtered wedding list
    } catch (error) {
        console.error('Error deleting wedding:', error);
    }
};
