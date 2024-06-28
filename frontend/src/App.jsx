import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Dialog } from "@mui/material";

import Navbar from "./components/navbar/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import PlantCare from "./pages/Plantcare/PlantCare";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#289040",
    },
    secondary: {
      main: "#FCA054",
    },
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dialog open={showLogin} onClose={() => setShowLogin(false)}>
        <LoginPopUp setShowLogin={setShowLogin} />
      </Dialog>
      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/inventory-summary" element={<Cart />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

// import React from "react";

// import Navbar from "./components/navbar/Navbar";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//       <Navbar />
//     </div>
//   );
// };

// export default App;

// ---------------------------------------

// import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FD7401", // Change this to your desired primary color
//     },
//     text: {
//       primary: "#ffffff", // Change this to your desired text color
//     },
//   },
//   typography: {
//     htmlFontSize: 16,
//     fontFamily: "Public Sans, sans-serif",
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//     fontWeightBold: 600,
//     h1: {
//       fontWeight: 600,
//       fontSize: "2.375rem",
//       lineHeight: 1.21,
//     },
//     h2: {
//       fontWeight: 600,
//       fontSize: "1.875rem",
//       lineHeight: 1.27,
//     },
//     h3: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       lineHeight: 1.33,
//     },
//     h4: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       lineHeight: 1.4,
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1rem",
//       lineHeight: 1.5,
//     },
//     h6: {
//       fontWeight: 400,
//       fontSize: "0.875rem",
//       lineHeight: 1.57,
//     },
//     caption: {
//       fontWeight: 400,
//       fontSize: "0.75rem",
//       lineHeight: 1.66,
//     },
//     body1: {
//       fontSize: "0.875rem",
//       lineHeight: 1.57,
//     },
//     body2: {
//       fontSize: "0.75rem",
//       lineHeight: 1.66,
//     },
//     subtitle1: {
//       fontSize: "0.875rem",
//       fontWeight: 600,
//       lineHeight: 1.57,
//     },
//     subtitle2: {
//       fontSize: "0.75rem",
//       fontWeight: 500,
//       lineHeight: 1.66,
//     },
//     overline: {
//       lineHeight: 1.66,
//     },
//     button: {
//       textTransform: "capitalize",
//     },
//   },
// });

// export default function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Navbar />

//       <Routes>
//         <Route>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/place-order" element={<PlaceOrder />} />
//         </Route>
//       </Routes>
//     </ThemeProvider>
//   );
// }
