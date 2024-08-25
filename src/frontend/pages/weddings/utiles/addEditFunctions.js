import { postWedding, putWedding } from '../utiles/api';

export const resetFieldes = (setGroomName, setGroomFather, setGroomFamily, setBrideName, setBrideFather,
    setBrideFamily, setWeddingLocation, setWeddingDate, setWeddingImage) => {
    // Reset form fields after successful submission
    setGroomName('');
    setGroomFather('');
    setGroomFamily('');
    setBrideName('');
    setBrideFather('');
    setBrideFamily('');
    setWeddingLocation('');
    setWeddingDate('');
    setWeddingImage('');
}

export const handleImageChange = (event, setWeddingImage) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setWeddingImage(reader.result);
        };
        reader.onerror = (error) => {
            console.error('File reading error:', error);
        };
        reader.readAsDataURL(file);
    }
}

export const handleSubmit = async (event, settings, isEditing, weddingData, weddings, weddingToEdit, handleClose) => {

    //check validity
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        settings.setValidated(true);
        return;
    }

    event.preventDefault();
    settings.setValidated(true);

    try {
        if (isEditing) {
            await putWedding(weddingToEdit._id, weddingData);
            const updatedWeddings = weddings.map(wedding =>
                wedding._id === weddingToEdit._id ? { _id: weddingToEdit._id, ...weddingData } : wedding
            );
            settings.setWeddings(updatedWeddings);
        } else {
            const newWedding = await postWedding(weddingData);
            settings.setWeddings([...weddings, newWedding]);
        }

        resetFieldes(settings.setGroomName, settings.setGroomFather, settings.setGroomFamily, settings.setBrideName, settings.setBrideFather,
            settings.setBrideFamily, settings.setWeddingLocation, settings.setWeddingDate, settings.setWeddingImage);
        settings.setValidated(false);
        handleClose();
    } catch (error) {
        console.error('Error adding wedding:', error);
    }
};