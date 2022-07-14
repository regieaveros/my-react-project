import React, { useState } from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  CircularProgress,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Input,
  Chip,
  Checkbox,
  ListItemText,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { toast, Flip } from "react-toastify";
import useAccesses from "../../../actions/access/useAccesses";
import useCreate from "../../../actions/usercontrol/useCreate";
import useEdit from "../../../actions/usercontrol/useEdit";
import useDelete from "../../../actions/usercontrol/useDelete";
import Form from "../../../components/Modal/Form";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  const classes = useStyles();

  isMode = switchMode;

  formWidth = classes.formLayout;

  const { data: accesses, isSuccess } = useAccesses();

  const [expanded, setExpanded] = useState("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [iconCodeValue, setIconCodeValue] = useState("");
  const [accessTypeValue, setAccessTypeValue] = useState([]);

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Access";
  } else if (isMode === "Edit") {
    formTitle = "Edit Access";
  } else {
    formTitle = "";
  }

  //Child Link
  const [label1Value, setLabel1Value] = useState("");
  const [link1Value, setLink1Value] = useState("");
  const [label2Value, setLabel2Value] = useState("");
  const [link2Value, setLink2Value] = useState("");
  const [label3Value, setLabel3Value] = useState("");
  const [link3Value, setLink3Value] = useState("");
  const [label4Value, setLabel4Value] = useState("");
  const [link4Value, setLink4Value] = useState("");
  const [label5Value, setLabel5Value] = useState("");
  const [link5Value, setLink5Value] = useState("");
  const [label6Value, setLabel6Value] = useState("");
  const [link6Value, setLink6Value] = useState("");
  const [label7Value, setLabel7Value] = useState("");
  const [link7Value, setLink7Value] = useState("");
  const [label8Value, setLabel8Value] = useState("");
  const [link8Value, setLink8Value] = useState("");
  const [label9Value, setLabel9Value] = useState("");
  const [link9Value, setLink9Value] = useState("");
  const [label10Value, setLabel10Value] = useState("");
  const [link10Value, setLink10Value] = useState("");

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      if (table[5].length) {
        setId(table[0]);
        setIndexValue(table[1]);
        setTypeValue(table[2]);
        setLabelValue(table[3]);
        setLinkValue(table[4]);
        setIconCodeValue(table[6]);
        setAccessTypeValue(table[7]);

        //Set Child Link
        if (table[5][0]) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
        }
        if (table[5][0] && table[5][1]) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
        }
        if (table[5][0] && table[5][1] && table[5][2]) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
        }
        if (table[5][0] && table[5][1] && table[5][2] && table[5][3]) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
          setLabel4Value(table[5][3]["label"]);
          setLink4Value(table[5][3]["link"]);
        }
        if (
          table[5][0] &&
          table[5][1] &&
          table[5][2] &&
          table[5][3] &&
          table[5][4]
        ) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
          setLabel4Value(table[5][3]["label"]);
          setLink4Value(table[5][3]["link"]);
          setLabel5Value(table[5][4]["label"]);
          setLink5Value(table[5][4]["link"]);
        }
        if (
          table[5][0] &&
          table[5][1] &&
          table[5][2] &&
          table[5][3] &&
          table[5][4] &&
          table[5][5]
        ) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
          setLabel4Value(table[5][3]["label"]);
          setLink4Value(table[5][3]["link"]);
          setLabel5Value(table[5][4]["label"]);
          setLink5Value(table[5][4]["link"]);
          setLabel6Value(table[5][5]["label"]);
          setLink6Value(table[5][5]["link"]);
        }
        if (
          table[5][0] &&
          table[5][1] &&
          table[5][2] &&
          table[5][3] &&
          table[5][4] &&
          table[5][5] &&
          table[5][6]
        ) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
          setLabel4Value(table[5][3]["label"]);
          setLink4Value(table[5][3]["link"]);
          setLabel5Value(table[5][4]["label"]);
          setLink5Value(table[5][4]["link"]);
          setLabel6Value(table[5][5]["label"]);
          setLink6Value(table[5][5]["link"]);
          setLabel7Value(table[5][6]["label"]);
          setLink7Value(table[5][6]["link"]);
        }
        if (
          table[5][0] &&
          table[5][1] &&
          table[5][2] &&
          table[5][3] &&
          table[5][4] &&
          table[5][5] &&
          table[5][6] &&
          table[5][7]
        ) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
          setLabel4Value(table[5][3]["label"]);
          setLink4Value(table[5][3]["link"]);
          setLabel5Value(table[5][4]["label"]);
          setLink5Value(table[5][4]["link"]);
          setLabel6Value(table[5][5]["label"]);
          setLink6Value(table[5][5]["link"]);
          setLabel7Value(table[5][6]["label"]);
          setLink7Value(table[5][6]["link"]);
          setLabel8Value(table[5][7]["label"]);
          setLink8Value(table[5][7]["link"]);
        }
        if (
          table[5][0] &&
          table[5][1] &&
          table[5][2] &&
          table[5][3] &&
          table[5][4] &&
          table[5][5] &&
          table[5][6] &&
          table[5][7] &&
          table[5][8]
        ) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
          setLabel4Value(table[5][3]["label"]);
          setLink4Value(table[5][3]["link"]);
          setLabel5Value(table[5][4]["label"]);
          setLink5Value(table[5][4]["link"]);
          setLabel6Value(table[5][5]["label"]);
          setLink6Value(table[5][5]["link"]);
          setLabel7Value(table[5][6]["label"]);
          setLink7Value(table[5][6]["link"]);
          setLabel8Value(table[5][7]["label"]);
          setLink8Value(table[5][7]["link"]);
          setLabel9Value(table[5][8]["label"]);
          setLink9Value(table[5][8]["link"]);
        }
        if (
          table[5][0] &&
          table[5][1] &&
          table[5][2] &&
          table[5][3] &&
          table[5][4] &&
          table[5][5] &&
          table[5][6] &&
          table[5][7] &&
          table[5][8] &&
          table[5][9]
        ) {
          setLabel1Value(table[5][0]["label"]);
          setLink1Value(table[5][0]["link"]);
          setLabel2Value(table[5][1]["label"]);
          setLink2Value(table[5][1]["link"]);
          setLabel3Value(table[5][2]["label"]);
          setLink3Value(table[5][2]["link"]);
          setLabel4Value(table[5][3]["label"]);
          setLink4Value(table[5][3]["link"]);
          setLabel5Value(table[5][4]["label"]);
          setLink5Value(table[5][4]["link"]);
          setLabel6Value(table[5][5]["label"]);
          setLink6Value(table[5][5]["link"]);
          setLabel7Value(table[5][6]["label"]);
          setLink7Value(table[5][6]["link"]);
          setLabel8Value(table[5][7]["label"]);
          setLink8Value(table[5][7]["link"]);
          setLabel9Value(table[5][8]["label"]);
          setLink9Value(table[5][8]["link"]);
          setLabel10Value(table[5][9]["label"]);
          setLink10Value(table[5][9]["link"]);
        }
      } else {
        setId(table[0]);
        setIndexValue(table[1]);
        setTypeValue(table[2]);
        setLabelValue(table[3]);
        setLinkValue(table[4]);
        setIconCodeValue(table[6]);
        setAccessTypeValue(table[7]);
      }
    }

    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const clearInput = () => {
    setIndexValue("");
    setTypeValue("");
    setLabelValue("");
    setLinkValue("");
    setIconCodeValue("");
    setAccessTypeValue([]);
    //Clear Child Link
    setLabel1Value("");
    setLink1Value("");
    setLabel2Value("");
    setLink2Value("");
    setLabel3Value("");
    setLink3Value("");
    setLabel4Value("");
    setLink4Value("");
    setLabel5Value("");
    setLink5Value("");
    setLabel6Value("");
    setLink6Value("");
    setLabel7Value("");
    setLink7Value("");
    setLabel8Value("");
    setLink8Value("");
    setLabel9Value("");
    setLink9Value("");
    setLabel10Value("");
    setLink10Value("");
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onSubmit = (
    index,
    type,
    label,
    link,
    iconcode,
    accesstype,
    label1,
    link1,
    label2,
    link2,
    label3,
    link3,
    label4,
    link4,
    label5,
    link5,
    label6,
    link6,
    label7,
    link7,
    label8,
    link8,
    label9,
    link9,
    label10,
    link10,
  ) => {
    const rawSidelink = [
      { label: label1, link: link1 },
      { label: label2, link: link2 },
      { label: label3, link: link3 },
      { label: label4, link: link4 },
      { label: label5, link: link5 },
      { label: label6, link: link6 },
      { label: label7, link: link7 },
      { label: label8, link: link8 },
      { label: label9, link: link9 },
      { label: label10, link: link10 },
    ];
    const sidelink = rawSidelink
      .filter((list) => list.label && list.link)
      .map((result) => {
        return {
          label: result.label,
          link: result.link,
        };
      });

    if (isMode === "Create") {
      createMutation.mutate(
        {
          index,
          type,
          label,
          link,
          iconcode,
          accesstype,
          sidelink,
        },
        {
          onSuccess: () => {
            setTimeout(() => {
              setOpen(false);
              toast.success("Created Successfully!");
              clearInput();
            }, 1000);
          },
        },
      );
    }
    if (isMode === "Edit") {
      editMutation.mutate(
        {
          index,
          type,
          label,
          link,
          iconcode,
          accesstype,
          sidelink,
        },
        {
          onSuccess: () => {
            setTimeout(() => {
              setOpen(false);
              toast.success("Updated Successfully!");
              clearInput();
            }, 1000);
          },
        },
      );
    }
  };

  const onDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        setTimeout(() => {
          setOpen(false);
          toast.error("Data Deleted!", {
            transition: Flip,
          });
        }, 1000);
      },
    });
  };

  const globalForm = () => {
    return (
      <>
        <TextField
          id="index"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={indexValue}
          onChange={(e) => setIndexValue(e.target.value)}
          margin="normal"
          label="Index"
          type="number"
          fullWidth
        />
        <TextField
          id="type"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={typeValue}
          onChange={(e) => setTypeValue(e.target.value)}
          margin="normal"
          select
          label="Type"
          fullWidth
        >
          <MenuItem key="0" value="">
            None
          </MenuItem>
          <MenuItem key="1" value="title">
            title
          </MenuItem>
          <MenuItem key="2" value="divider">
            divider
          </MenuItem>
        </TextField>
        <TextField
          id="label"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={labelValue}
          onChange={(e) => setLabelValue(e.target.value)}
          margin="normal"
          label="Label"
          type="text"
          fullWidth
        />
        <TextField
          id="link"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={linkValue}
          onChange={(e) => setLinkValue(e.target.value)}
          margin="normal"
          label="Link"
          type="text"
          fullWidth
        />
        <Box className={classes.accordionLayout}>
          <Accordion>
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={
                <span className={classes.accordionIcon}>
                  <Icons icon={`ExpandMore`} />
                </span>
              }
            >
              <Typography>Side Link</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.sideLinkContainer}>
              <Box component="div" className={classes.childLayout}>
                <Accordion
                  square
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    className={classes.accordionSummaryLink}
                  >
                    <Typography>Link 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="label1"
                          InputProps={{
                            classes: {
                              underline: classes.textFieldUnderline,
                              input: classes.textField,
                            },
                          }}
                          value={label1Value}
                          onChange={(e) => setLabel1Value(e.target.value)}
                          margin="normal"
                          label="Label"
                          type="text"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="link1"
                          InputProps={{
                            classes: {
                              underline: classes.textFieldUnderline,
                              input: classes.textField,
                            },
                          }}
                          value={link1Value}
                          onChange={(e) => setLink1Value(e.target.value)}
                          margin="normal"
                          label="Link"
                          type="text"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Box
                  component="div"
                  display={
                    label1Value.length === 0 || link1Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label1Value.length === 0 || link1Value.length === 0
                    }
                    square
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label2"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label2Value}
                            onChange={(e) => setLabel2Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link2"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link2Value}
                            onChange={(e) => setLink2Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label2Value.length === 0 || link2Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label2Value.length === 0 || link2Value.length === 0
                    }
                    square
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label3"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label3Value}
                            onChange={(e) => setLabel3Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link3"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link3Value}
                            onChange={(e) => setLink3Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label3Value.length === 0 || link3Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label3Value.length === 0 || link3Value.length === 0
                    }
                    square
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label4"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label4Value}
                            onChange={(e) => setLabel4Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link4"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link4Value}
                            onChange={(e) => setLink4Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label4Value.length === 0 || link4Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label4Value.length === 0 || link4Value.length === 0
                    }
                    square
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      aria-controls="panel5d-content"
                      id="panel5d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 5</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label5"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label5Value}
                            onChange={(e) => setLabel5Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link5"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link5Value}
                            onChange={(e) => setLink5Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label5Value.length === 0 || link5Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label5Value.length === 0 || link5Value.length === 0
                    }
                    square
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      aria-controls="panel6d-content"
                      id="panel6d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 6</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label6"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label6Value}
                            onChange={(e) => setLabel6Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link6"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link6Value}
                            onChange={(e) => setLink6Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label6Value.length === 0 || link6Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label6Value.length === 0 || link6Value.length === 0
                    }
                    square
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <AccordionSummary
                      aria-controls="panel7d-content"
                      id="panel7d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 7</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label7"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label7Value}
                            onChange={(e) => setLabel7Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link7"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link7Value}
                            onChange={(e) => setLink7Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label7Value.length === 0 || link7Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label7Value.length === 0 || link7Value.length === 0
                    }
                    square
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                  >
                    <AccordionSummary
                      aria-controls="panel8d-content"
                      id="panel8d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 8</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label8"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label8Value}
                            onChange={(e) => setLabel8Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link8"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link8Value}
                            onChange={(e) => setLink8Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label8Value.length === 0 || link8Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label8Value.length === 0 || link8Value.length === 0
                    }
                    square
                    expanded={expanded === "panel9"}
                    onChange={handleChange("panel9")}
                  >
                    <AccordionSummary
                      aria-controls="panel9d-content"
                      id="panel9d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 9</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label9"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label9Value}
                            onChange={(e) => setLabel9Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link9"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link9Value}
                            onChange={(e) => setLink9Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  component="div"
                  display={
                    label9Value.length === 0 || link9Value.length === 0
                      ? "none"
                      : "block"
                  }
                >
                  <Accordion
                    disabled={
                      label9Value.length === 0 || link9Value.length === 0
                    }
                    square
                    expanded={expanded === "panel10"}
                    onChange={handleChange("panel10")}
                  >
                    <AccordionSummary
                      aria-controls="panel10d-content"
                      id="panel10d-header"
                      className={classes.accordionSummaryLink}
                    >
                      <Typography>Link 10</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="label10"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={label10Value}
                            onChange={(e) => setLabel10Value(e.target.value)}
                            margin="normal"
                            label="Label"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="link10"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={link10Value}
                            onChange={(e) => setLink10Value(e.target.value)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <TextField
          id="iconcode"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={iconCodeValue}
          onChange={(e) => setIconCodeValue(e.target.value)}
          margin="normal"
          label="Icon Code"
          type="text"
          fullWidth
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="accessType">Access Type</InputLabel>
          <Select
            labelId="accessType"
            id="accesstype"
            multiple
            value={accessTypeValue}
            onChange={(e) => setAccessTypeValue(e.target.value)}
            input={<Input />}
            renderValue={(accessTypeValue) => (
              <div className={classes.chips}>
                {accessTypeValue.map((value) => (
                  <Chip label={value} className={classes.chip} />
                ))}
              </div>
            )}
            fullWidth
          >
            {isSuccess ? (
              accesses.map((list) => (
                <MenuItem key={list._id} value={list.type}>
                  <Checkbox
                    checked={accessTypeValue.indexOf(`${list.type}`) > -1}
                  />
                  <ListItemText primary={list.type} />
                </MenuItem>
              ))
            ) : (
              <MenuItem>Has a error...</MenuItem>
            )}
          </Select>
        </FormControl>
        <div className={classes.ButtonContainer}>
          <Button
            onClick={() =>
              onSubmit(
                indexValue,
                typeValue,
                labelValue,
                linkValue,
                iconCodeValue,
                accessTypeValue,
                label1Value,
                link1Value,
                label2Value,
                link2Value,
                label3Value,
                link3Value,
                label4Value,
                link4Value,
                label5Value,
                link5Value,
                label6Value,
                link6Value,
                label7Value,
                link7Value,
                label8Value,
                link8Value,
                label9Value,
                link9Value,
                label10Value,
                link10Value,
              )
            }
            disabled={
              indexValue.length === 0 ||
              accessTypeValue.length === 0 ||
              createLoading ||
              editLoading
            }
            size="large"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
          >
            {createLoading || editLoading ? (
              <CircularProgress size={20} />
            ) : (
              <div className={classes.buttonIconSize}>
                <Icons icon={`SaveAlt`} />
              </div>
            )}
            <Hidden only="xs">
              &nbsp;
              {isMode === "Create"
                ? "Create User Access"
                : "Update User Access"}
            </Hidden>
          </Button>
        </div>
      </>
    );
  };

  return (
    <>
      {isMode === "Create" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
          className={classes.buttonSize}
        >
          <div className={classes.buttonIconSize}>
            <Icons icon={`Airplay`} />
          </div>
          <Hidden only="xs">&nbsp;Add Access</Hidden>
        </Button>
      )}

      {isMode === "Edit" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen(data)}
          className={classes.mdIconSize}
        >
          <Icons icon={`Edit`} />
        </Button>
      )}

      {isMode === "Delete" && (
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => handleOpen(data)}
          className={classes.mdIconSize}
        >
          <Icons icon={`Delete`} />
        </Button>
      )}

      <Form
        open={open}
        handleClose={handleClose}
        formTitle={formTitle}
        globalForm={globalForm}
        formWidth={formWidth}
        isMode={isMode}
        onDelete={onDelete}
        isLoading={deleteLoading}
        id={id}
      />
    </>
  );
};

export default Actions;
