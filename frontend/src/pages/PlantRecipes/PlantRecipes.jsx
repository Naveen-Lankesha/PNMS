import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#147721",
    border: "2px solid rgba(20, 119, 33, 0.5)",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#144F21",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const initialRows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function PlantRecipes() {
  const [rows, setRows] = React.useState(initialRows);
  const [searchQuery, setSearchQuery] = React.useState("");

  const addNewRow = () => {
    const newRow = createData(
      `New Dessert ${rows.length + 1}`,
      300,
      10.0,
      50,
      5.0
    );
    setRows([newRow, ...rows]);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Button
        variant="contained"
        onClick={addNewRow}
        style={{
          backgroundColor: "#289040",
          position: "relative",
          top: "20px",
          left: "25px",
          zIndex: 9999,
        }}
      >
        <AddIcon /> Add a New Crop
      </Button>

      <TextField
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          position: "relative",
          mb: 8,
          top: "20px",
          minWidth: "100px",
          left: "540px",
          "& .MuiInputBase-root": {
            height: "40px", // Adjust height of the input element
          },
          "& .MuiOutlinedInput-input": {
            padding: "10px", // Adjust padding if needed
          },
          borderRadius: "50px", // Creates an oval shape
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px", // Matches the border radius of the input
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>

      <TableContainer
        component={Paper}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Table
          sx={{
            width: "95%",
            minWidth: 700,
            borderCollapse: "collapse",
            borderRadius: "12px",
            overflow: "hidden",
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ border: "2px solid rgba(20, 119, 33, 0.5)" }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
