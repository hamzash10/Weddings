export const updateOptions = (weddings, setAdressesOptions) => {
    const uniqueAdresses = [...new Set(weddings.map(wedding => wedding.location))];
    setAdressesOptions(uniqueAdresses);
};

export const handleFilterChange = (selectedAddress, setFilterAdresses) => {
    setFilterAdresses(selectedAddress || 'All Addresses');
};

export const applyAddressFilter = (list, filterAdresses) => {

    if (filterAdresses && filterAdresses !== 'All Addresses') {
        return list.filter(wedding =>
            wedding.location.toLowerCase() === filterAdresses.toLowerCase()
        );
    }

    return list;
};

export const applySearchFilter = (list, searchQuery) => {
    if (searchQuery) {
        return list.filter(wedding => {
            const groomFullName = `${wedding.groomName} ${wedding.groomFather} ${wedding.groomFamily}`.replace(/\s+/g, ' ').toLowerCase();
            const brideFullName = `${wedding.brideName} ${wedding.brideFather} ${wedding.brideFamily}`.replace(/\s+/g, ' ').toLowerCase();

            return groomFullName.includes(searchQuery.toLowerCase()) || brideFullName.includes(searchQuery.toLowerCase());
        });
    }

    return list;
};
