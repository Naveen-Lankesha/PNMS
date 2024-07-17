import React, { useState, useEffect } from "react";
import axios from "axios";
import EditableCard from "./EditableCard";
import { Container, Grid } from "@mui/material";

const BatchList = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/batch/list")
      .then((response) => {
        if (response.data.success) {
          setBatches(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch batch list");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching batch list. Please try again later.");
        setLoading(false);
      });
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Grid container spacing={3}>
        {batches.map((batch) => (
          <Grid item xs={12} sm={6} md={4} key={batch._id}>
            <EditableCard
              batchID={batch.batchID}
              type={batch.type}
              stage={batch.stage}
              quantity={batch.quantity}
              moistureLevel={batch.moistureLevel}
              pestDate={batch.pestDate}
      
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BatchList;
