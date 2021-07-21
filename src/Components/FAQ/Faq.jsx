import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./Faq.module.css";
import { DataLeft, DataRight } from "./data";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Faq = () => {
  const classes = useStyles();

  return (
    <>
      <div className={styles.head}>
        <h2>FAQ</h2>
        <hr></hr>
      </div>
      <div className={styles.root}>
        <div className={styles.faq}>
          {DataLeft.map((item) => {
            return (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul className={styles.faq_list}>
                        <li>{item.answer}</li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <br />
              </>
            );
          })}
        </div>
        <div className={styles.faq}>
          {DataRight.map((item) => {
            return (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul className={styles.faq_list}>
                        <li>{item.answer}</li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <br />
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.view_button}>
        <p>View More</p>
      </div>
    </>
  );
};

export default Faq;
