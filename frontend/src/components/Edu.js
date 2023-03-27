import React from "react";
import "./Edu.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import { Divider, Box, Typography, Grid, Paper } from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#15181e',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
  }));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#262c36",
  borderRadius: "1rem",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "35%",
};

const Edu = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  return (
    <div>
      <div className="aboutme">
        <div className="top1">
          <h5>
            <strong>PROFESSIONAL INFORMATION</strong>
          </h5>
          <Button
            size="small"
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#f3912e",
              ":hover": { bgcolor: "#f3912e", opacity: 0.75 },
            }}
          >
            EDIT
          </Button>
        </div>
        <div className="btm2">
          <div className="one">
            <span>Highest Education</span>
            <div className="social">
              <input type="text" placeholder="Graduation" />
              <button>
                <ArrowDropDownIcon />
              </button>
            </div>
          </div>
          <div className="one">
            <span>What do you do currently?</span>
            <div className="social">
              <input type="text" placeholder="College Student" />
              <button>
                <ArrowDropDownIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Divider sx={{ bgcolor: "#9e9e9e" }} variant="middle" />
      <div className="aboutme">
        <div className="top1">
          <h5>
            <strong>PASSWORD AND SECURITY</strong>
          </h5>
          <Button
            onClick={handleOpen}
            size="small"
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#f3912e",
              ":hover": { bgcolor: "#f3912e", opacity: 0.75 },
            }}
          >
            EDIT
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography sx={{ color: "#fff" }}>Current Password</Typography>
                <div className="social1">
                  <input type="text" />
                  <VisibilityIcon />
                </div>
                <Typography sx={{ color: "#fff" }}>New Password</Typography>
                <div className="social1">
                  <input type="text" />
                  <VisibilityIcon />
                </div>
                <Typography sx={{ color: "#fff" }}>Confirm Password</Typography>
                <div className="social1">
                  <input type="text" />
                  <VisibilityIcon />
                </div>
                <div className="btn">
                  <div className="btn1">
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "#000",
                        backgroundColor: "#fff",
                        ":hover": { bgcolor: "#fff", opacity: 0.75 },
                      }}
                    >
                      Save
                    </Button>
                  </div>
                  <div className="btn1">
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        color: "#fff",
                        backgroundColor: "#f3912e",
                        ":hover": { bgcolor: "#f3912e", opacity: 0.75 },
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
        <div className="one1">
          <span>Password</span>
          <div className="social">
            <input type="text" />
          </div>
        </div>
      </div>
      <Divider sx={{ bgcolor: "#9e9e9e" }} variant="middle" />
      <div className="aboutme">
        <div className="top1">
          <h5>
            <strong>INTEREST</strong>
          </h5>
          <Button
            onClick={handleOpen1}
            size="small"
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#f3912e",
              ":hover": { bgcolor: "#f3912e", opacity: 0.75 },
            }}
          >
            EDIT
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open1}
            onClose={handleClose1}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open1}>
              <Box sx={style}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  className='grid'
                >
                  <Grid item xs={6}>
                    <Item>App Development</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Web Development</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Game Development</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Data Structure</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Programming</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Machine Learning</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Data Science</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Others</Item>
                  </Grid>
                </Grid>
                <div className="btn">
                  <div className="btn1">
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "#000",
                        backgroundColor: "#fff",
                        ":hover": { bgcolor: "#fff", opacity: 0.75 },
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div className="btn1">
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        color: "#fff",
                        backgroundColor: "#f3912e",
                        ":hover": { bgcolor: "#f3912e", opacity: 0.75 },
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Edu;
