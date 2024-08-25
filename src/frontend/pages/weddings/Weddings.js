import React, { useEffect, useState } from 'react';
import WeddingCard from './components/WeddingCard';
import AddWedding from './components/addWeddingButton';
import { handleFilterChange, updateOptions, applyAddressFilter, applySearchFilter } from './utiles/filterFunctions';
import { handleDelete } from './utiles/deleteFunctions';
import { Container, Col, Row, Button, Dropdown, Spinner } from 'react-bootstrap';
import { SearchBar } from './components/searchBar';
import { getWeddings } from './utiles/api';
import './styles/WeddingStyles.css'


const Weddings = () => {

  const [weddings, setWeddings] = useState([]); // all the weddings in the server
  const [filteredWeddings, setFilteredWeddings] = useState([]); // filtered weddings by address and search bar
  const [showModal, setShowModal] = useState(false); // the add wedding modal
  const [filterAdresses, setFilterAdresses] = useState('All Addresses'); // the chosen address
  const [adressesOptions, setAdressesOptions] = useState([]); // all the address options
  const [searchQuery, setSearchQuery] = useState(''); // content of the search bar
  const [weddingToEdit, setWeddingToEdit] = useState(null);
  const [loading, setLoading] = useState(true);


  //starting the page
  useEffect(() => {
    const getAllWeddings = async () => {
      try {
        const response = await getWeddings();
        setWeddings(response);
        setFilteredWeddings(response); // no filteer applied yet
        updateOptions(response, setAdressesOptions);
      } catch (error) {
        console.error('Failed to get weddings:', error);
      }
      setLoading(false);
    };
    getAllWeddings();
  }, []);


  // show/hide the add wedding modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setWeddingToEdit(null);
  }



  // filtering logic
  useEffect(() => {
    let tempFilteredWeddings = [...weddings];
    tempFilteredWeddings = applyAddressFilter(tempFilteredWeddings, filterAdresses);
    tempFilteredWeddings = applySearchFilter(tempFilteredWeddings, searchQuery);
    setFilteredWeddings(tempFilteredWeddings);

  }, [filterAdresses, weddings, searchQuery]);

  // editing logic
  useEffect(() => {
    updateOptions(weddings, setAdressesOptions);
  }, [weddings]);


  const handleEdit = (wedding) => {
    setWeddingToEdit(wedding);
    handleShow();
  };

  if (loading) {
    // Show spinner while loading
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="grow" role="status"
          style={{ width: '100px', height: '100px', color: '#ffffffa0' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container fluid>
      <Row style={{ marginTop: 0 }}>

        {/* Adding Weddings Section */}
        <Col xs="auto">
          <Button className='round-button' onClick={handleShow}>
            +
          </Button>
        </Col>

        {/* Adress filter Section */}
        <Col xs="auto" className="d-flex align-items-center">

          <Dropdown style={{ minWidth: '250px' }} onSelect={(selectedAddress) => handleFilterChange(selectedAddress, setFilterAdresses)}>
            <Dropdown.Toggle
              style={{
                backgroundColor: '#d4af37',
                color: '#fff',
                border: 'none',
                fontSize: '18px',
                textAlign: 'center',
                minWidth: '200px',
                borderRadius: '8px',
                padding: '7px'
              }}
            >
              {filterAdresses}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: '250px' }}>
              <Dropdown.Item eventKey="All Addresses">All Addresses</Dropdown.Item>
              {adressesOptions.map((address, index) => (
                <Dropdown.Item key={index} eventKey={address}>
                  {address}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Search Section */}
        <Col className="d-flex align-items-center justify-content-end" l>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Col>


      </Row>
      <Row>
        {filteredWeddings.map((wedding, index) => (
          <Col key={index} md={4} className="mb-4">
            <WeddingCard
              wedding={wedding}
              onDelete={() => handleDelete(wedding._id, weddings, setWeddings, applyAddressFilter)}
              onEdit={() => handleEdit(wedding)}
            />
          </Col>
        ))}
      </Row>
      <AddWedding
        show={showModal}
        handleClose={handleClose}
        setWeddings={setWeddings}
        weddings={weddings}
        weddingToEdit={weddingToEdit}
      />
    </Container>
  )
};

export default Weddings;
