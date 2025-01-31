import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "@/components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "@/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@/examples/Navbars/DashboardNavbar";
import Footer from "@/examples/Footer";
import MasterCard from "@/examples/Cards/MasterCard";
import DefaultInfoCard from "@/examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "@/layouts/billing/components/PaymentMethod";
import Invoices from "@/layouts/billing/components/Invoices";
import BillingInformation from "@/layouts/billing/components/BillingInformation";
import Transactions from "@/layouts/billing/components/Transactions";
import MDButton from "@/components/MDButton";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

const CreatePost = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    right: false,
  });
  const [open, setOpen] = useState(false);
  const [openAnother, setOpenAnother] = useState(false);

  //   const toggleDrawer = (anchor, open) => (event) => {
  //     if (
  //       event.type === "keydown" &&
  //       (event.key === "Tab" || event.key === "Shift")
  //     ) {
  //       return;
  //     }

  //     setState({ ...state, [anchor]: open });
  //   };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const list = () => (
    <>
      <Box
        sx={{
          width: 480,
          height: "100%",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255)",
          borderTopRightRadius: "0.75rem",
        }}
        role="presentation"
        //   onClick={() => {
        //     setOpen(false);
        //   }}
        className="customClassname"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
      >
        <TextareaAutosize
          minRows={3}
          // placeholder="Type something..."
          // style={{ width: "96%", padding: "10px", fontSize: "16px" }}
          style={{
            width: "-webkit-fill-available",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontFamily: "Arial, sans-serif",
            transition: "0.3s ease-in-out",
            backgroundColor: "#f9f9f9",
          }}
          className="postinputarea"
        />
        <Divider />
        <MDButton
          component="label"
          role={undefined}
          variant="gradient"
          color="info"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{
            margin: "10px",
            width: "-webkit-fill-available",
            color: "#fff",
          }}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </MDButton>
        <Box sx={{ position: "absolute", bottom: "15px", width: "100%" }}>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <MDButton
              variant="outlined"
              color="info"
              sx={{ margin: "0.09375rem 1rem", mb: 2, mr: 0 }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Draft
            </MDButton>
            <MDButton
              variant="gradient"
              color="info"
              sx={{ margin: "0.09375rem 1rem", mb: 2 }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Publish
            </MDButton>
          </Box>
        </Box>
      </Box>
    </>
  );

  const listTwo = () => (
    <>
      <Box
        sx={{
          width: 480,
          height: "100%",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255)",
          borderTopLeftRadius: "0.75rem",
        }}
        role="presentation"
        //   onClick={() => {
        //     setOpen(false);
        //   }}
        className="customClassname"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
      >
        <TextField
          id="outlined-search"
          sx={{ margin: "15px", width: "-webkit-fill-available" }}
          label="Search field"
          type="search"
        />
        <Box sx={{ position: "absolute", bottom: "15px", width: "100%" }}>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <MDButton
              variant="outlined"
              color="info"
              sx={{ margin: "0.09375rem 1rem", mb: 2, mr: 0, ml: 0 }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <AddIcon /> Add Acount
            </MDButton>
          </Box>
        </Box>
      </Box>
    </>
  );

  const listThree = () => (
    <>
      <Box
        sx={{
          width: 480,
          height: "100%",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255)",
          borderTopLeftRadius: "0.75rem",
        }}
        role="presentation"
        //   onClick={() => {
        //     setOpen(false);
        //   }}
        className="customClassname"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
      >
        <Card sx={{ m: 2 }}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            }
            action={null}
            title={
              <Skeleton
                animation={false}
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={<Skeleton animation={false} height={10} width="40%" />}
          />
          {
            <Skeleton
              sx={{ height: 190 }}
              animation={false}
              variant="rectangular"
            />
          }

          <CardContent>
            <React.Fragment>
              <Skeleton
                animation={false}
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation={false} height={10} width="80%" />
            </React.Fragment>
          </CardContent>
        </Card>
      </Box>
    </>
  );

  return (
    <>
      <MDButton
        variant="gradient"
        color="info"
        sx={{ margin: "0.09375rem 1rem", mb: 2 }}
        // onClick={() => {
        //   navigate("/createPost");
        // }}
        // onClick={toggleDrawer(anchor, true)}
        onClick={() => {
          setOpen(true);
          setOpenAnother(true);
        }}
      >
        Create Post
      </MDButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
          setOpenAnother(false);
        }}
        // sx={{
        //   width: 500,
        //   flexShrink: 0,
        //   "& .MuiDrawer-paper": { width: 500 },
        // }}
        PaperProps={{
          sx: { width: "75%", background: "transparent" }, // Adjust width as needed
        }}
      >
        <Box
          style={{
            display: "flex",
            gap: "1rem",
            // padding: "2rem",
            // backgroundColor: "#f9f9f9",
            height: "100%",
          }}
        >
          {listTwo()}
          {list()}
          {listThree()}
        </Box>
      </Drawer>
      {/* <Drawer
        anchor={"right"}
        open={openAnother}
        onClose={() => {
          setOpenAnother(false);
          setOpen(false)
        }}
        // sx={{
        //   width: 500,
        //   flexShrink: 0,
        //   "& .MuiDrawer-paper": { width: 500, marginRight : 500 },
        // }}
        PaperProps={{
          sx: { width: "500px", marginRight: "500px" } // Push it beside the first drawer
        }}
      >
        {listTwo()}
      </Drawer> */}
    </>
  );
};

export default CreatePost;
