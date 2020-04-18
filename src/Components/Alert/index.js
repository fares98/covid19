import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Collapse, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import "./alert.css";

const AlertComponent = ({ closeAlert }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="alert">
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              onClick={() => {
                setOpen(false);
                closeAlert();
              }}
            >
              <Close />
            </IconButton>
          }
          severity="error"
          variant="filled"
        >
          يرجى التأكد من إجابة جميع الأسئلة!
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertComponent;
