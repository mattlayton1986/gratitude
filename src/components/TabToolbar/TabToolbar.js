import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesLength } from "../../redux/gratitude/categories/category.selectors";
import { Box, Container, Typography } from "@mui/material";
import TabsMenu from "../TabsMenu/TabsMenu";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Pointer } from "../../assets/arrow_11.svg";

const boxStyles = {
  width: "100vw",
  px: "40px", // padding left and right
  display: "flex",
  justifyContent: "space-between",
  border: 2,
  borderColor: "divider",
};

const containerStyles = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "auto",
    lg: "auto",
    xl: "auto",
  },
  position: {
    xs: "static",
    sm: "static",
    md: "absolute",
    lg: "absolute",
    xl: "absolute",
  },
  right: {
    xs: "unset",
    sm: "unset",
    md: "160px",
    lg: "160px",
    xl: "160px",
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "48px",
    display: "flex",
    justifyContent: "space-evenly",

    "& .MuiTypography-h6": {
      display: "inline-block",
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },

    "& svg": {
      transform: "rotate(180deg) scale(1.5, 0.6)",
      display: "inline-block",
      verticalAlign: "middle",
      position: "relative",
      top: "-10px",
      left: "30px",
      "& g": {
        stroke: theme.palette.primary.main,
        strokeWidth: "3",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  },
}));

const TabToolbar = () => {
  const classes = useStyles();
  const categoriesLength = useSelector(selectCategoriesLength);
  return (
    <Box sx={boxStyles}>
      {categoriesLength === 0 ? (
        <Container
          maxWidth="xl"
          disableGutters
          className={classes.container}
          sx={containerStyles}
        >
          <Typography variant="h6">
            You haven't added any categories yet. Click above to get started!
          </Typography>
          <Pointer />
        </Container>
      ) : (
        <TabsMenu />
      )}
    </Box>
  );
};

export default TabToolbar;
