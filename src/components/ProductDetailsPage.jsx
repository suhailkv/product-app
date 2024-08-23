import { useState, useEffect } from 'react';
import { Button,Typography, Container, Box, Paper, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CONSTANTS from '../constants'

const ProductDetailsPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [profitRecords, setProfitRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${CONSTANTS.BACKEND_URL}/${CONSTANTS.PRODUCT_API}/${id}`);
        console.log(response);
        
        setProduct(response.data.product);
        setProfitRecords(response.data.profitRecords);
        setLoading(false);
      } catch (error) {
        console.error( error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        {product ? (
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
              Product Details
            </Typography>
            <Typography variant="h6" gutterBottom>
              Product Information
            </Typography>
            <Typography variant="body1" >
              <strong>Name:</strong> {product.name}
            </Typography>
            <Typography variant="body1">
              <strong>Purchase Price:</strong> {product.purchase_price}
            </Typography>
            <Typography variant="body1">
              <strong>Sales Price:</strong> {product.sales_price}
            </Typography>
            <Typography variant="body1">
              <strong>Profit:</strong> {product.profit}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Profit Records
            </Typography>
            <List>
              {profitRecords.length > 0 ? (
                profitRecords.map(record => (
                  <ListItem key={record.record_id}>
                    <ListItemText
                      primary={`Record ID: ${record.record_id}`}
                      secondary={`Profit: ${record.profit}`}
                    />
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary="No profit records available." />
                </ListItem>
              )}
            </List>
          </Paper>
        ) : (
          <Typography variant="body1">No product details available.</Typography>
        )}
      </Box>
      <Button type="button" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={()=>navigate('/')}>
            Add New product
          </Button>
    </Container>
  );
};

export default ProductDetailsPage;
