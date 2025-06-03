import { useState } from "react";
import { TextField, Button, AppBar, Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import "./App.css";
import { orange, purple, grey } from "@mui/material/colors";

function App() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/generate", {
        text: inputText,
      });
      setResponseText(response.data.generatedText);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: grey[50] }}>
        <Toolbar>
          <img src="../foxnobg.png" alt="Logo" style={{ height: "40px", marginRight: "16px" }} />
          <Typography variant="h6" sx={{ flexGrow: 1, color: "orange" }}>
            Fox Flow AI
          </Typography>
          <Button sx={{color: "orange"}}>Home</Button>
          <Button sx={{color: "orange"}}>About</Button>
          <Button sx={{color: "orange"}}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div style={{ padding: "2rem" }}>
        <Stack spacing={2}>
          <TextField
            id="input-text"
            label="Input Text"
            variant="outlined"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: orange[500],
                },
                "&:hover fieldset": {
                  borderColor: orange[700],
                },
                "&.Mui-focused fieldset": {
                  borderColor: orange[900],
                },
              },
            }}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: orange[500],
              color: "white",
              "&:hover": {
                backgroundColor: orange[700],
              },
              "&:active": {
                backgroundColor: orange[900],
              },
              "&:focus": {
                outline: "none",
                boxShadow: `0 0 0 2px ${orange[300]}`,
              },
              padding: "8px 16px",
            }}
          >
            Submit
          </Button>
          <TextField
            disabled
            id="response-text"
            value={responseText}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: orange[500],
                },
                "&.Mui-focused fieldset": {
                  borderColor: purple[900],
                },
              },
            }}
          />
        </Stack>
      </div>
    </>
  );
}

export default App;