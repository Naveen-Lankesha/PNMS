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
import localImage from "./../../assets/frontend_assets/background.png";

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

function createData(
  type,
  durationtoPot,
  DurationtoFertilize,
  DurationtoPesticides,
  DurationtoSell
) {
  return {
    type,
    durationtoPot,
    DurationtoFertilize,
    DurationtoPesticides,
    DurationtoSell,
  };
}

const initialRows = [
  createData("Purple Cabbage", 1, 3, 5, 6),
  createData("Green Cabbage", 1, 3, 5, 6),
];

export default function PlantRecipes() {
  const [rows, setRows] = React.useState(initialRows);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [editIdx, setEditIdx] = React.useState(null);

  const addNewRow = () => {
    const newRow = createData(
      `New Plant ${rows.length + 1}`,
      "-",
      "-",
      "-",
      "-"
    );
    setRows([newRow, ...rows]);
  };

  const handleEdit = (idx) => {
    setEditIdx(idx);
  };

  const handleSave = () => {
    setEditIdx(null);
  };

  const handleChange = (e, field, idx) => {
    const updatedRows = rows.map((row, rowIdx) =>
      rowIdx === idx ? { ...row, [field]: e.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.type.toLowerCase().includes(searchQuery.toLowerCase())
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
          mb: 10,
          ml: { xs: 0, sm: 60, md: 150 },
          top: "60px",
          //right: "-1000px", // Position the element 20px from the right edge of the page
          minWidth: "100px",
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
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${localImage})`,
        }}
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
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell align="right">
                Duration to Pot (Weeks)
              </StyledTableCell>
              <StyledTableCell align="right">
                Duration to Fertilize (Weeks)
              </StyledTableCell>
              <StyledTableCell align="right">
                Duration to Pesticides (Weeks)
              </StyledTableCell>
              <StyledTableCell align="right">
                Duration to Sell (Weeks)
              </StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, idx) => (
              <StyledTableRow
                key={idx}
                sx={{ border: "2px solid rgba(20, 119, 33, 0.5)" }}
              >
                <StyledTableCell component="th" scope="row">
                  {editIdx === idx ? (
                    <TextField
                      value={row.type}
                      onChange={(e) => handleChange(e, "type", idx)}
                    />
                  ) : (
                    row.type
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {editIdx === idx ? (
                    <TextField
                      value={row.durationtoPot}
                      onChange={(e) => handleChange(e, "durationtoPot", idx)}
                    />
                  ) : (
                    row.durationtoPot
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {editIdx === idx ? (
                    <TextField
                      value={row.DurationtoFertilize}
                      onChange={(e) =>
                        handleChange(e, "DurationtoFertilize", idx)
                      }
                    />
                  ) : (
                    row.DurationtoFertilize
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {editIdx === idx ? (
                    <TextField
                      value={row.DurationtoPesticides}
                      onChange={(e) =>
                        handleChange(e, "DurationtoPesticides", idx)
                      }
                    />
                  ) : (
                    row.DurationtoPesticides
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {editIdx === idx ? (
                    <TextField
                      value={row.DurationtoSell}
                      onChange={(e) => handleChange(e, "DurationtoSell", idx)}
                    />
                  ) : (
                    row.DurationtoSell
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {editIdx === idx ? (
                    <Button onClick={() => handleSave(idx)}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEdit(idx)}>Edit</Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
