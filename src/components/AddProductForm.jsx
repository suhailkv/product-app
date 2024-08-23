import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import CONSTANTS from '../constants';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salesPrice, setSalesPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, purchase_price: purchasePrice, sales_price: salesPrice };
    try {
	    const response = await axios.post(`${CONSTANTS.BACKEND_URL}/${CONSTANTS.PRODUCT_API}`, product);
      setName('');
      setPurchasePrice('');
      setSalesPrice('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={2} border={1} borderRadius={2} borderColor="grey.300">
        <Typography variant="h4" gutterBottom>
          Add A Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Purchase Price"
            type="number"
            fullWidth
            margin="normal"
            value={purchasePrice}
            onChange={(e) => {setPurchasePrice(e.target.value)}}
            required
          />
          <TextField
            label="Sales Price"
            type="number"
            fullWidth
            margin="normal"
            value={salesPrice}
            onChange={(e) => {setSalesPrice(e.target.value)}}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Add Product
          </Button>
        </form>
      </Box>
    </Container>
  );
};
export default AddProductForm;
