import { useState } from "react";
import { TextField, Button, AppBar, Toolbar, Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import "./App.css";
import { orange, grey } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

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
    <Box sx={{ flexGrow: 1, outlineColor: "orange", outlineStyle: "solid", outlineWidth: "2px" }}>
      <AppBar position="static" sx={{bgcolor: grey[50]}}>
        <Toolbar>
        <img src="../foxnobg.png" alt="Logo" style={{ height: "40px", marginRight: "16px" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "orange" }}>
            Fox Flow AI
          </Typography>
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
                  borderColor: grey[900],
                },
              },
            }}
          />
        </Stack>
      </div>

    </Box>
      
        {/* List Section */}
        <Box className="list-box">
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" secondary="Secondary text" />
            </ListItem>
          </List>

          <TextField></TextField>
          <Button variant="contained" color="primary" sx={{ marginLeft: "8px", backgroundColor: orange[500] }}>
            <AddIcon></AddIcon>
          </Button>
        </Box>
    </>
  );
}

export default App;