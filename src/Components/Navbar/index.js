import React, { useState } from "react";
import { ArrowBack } from "@material-ui/icons";
import { Dialog, DialogTitle, Button, DialogActions } from "@material-ui/core";
import { createBrowserHistory } from "history";

import "./nav.css";

const Navbar = ({ page, handleBack }) => {
  const history = createBrowserHistory();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    handleClose();
    history.push("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div>
        <Button className="navbar__cancel" onClick={handleClickOpen}>
          إلغاء
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">
            هل أنت متأكد أنك تريد إلغاء الفحص الطبي؟
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleAccept} color="primary">
              نعم
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              لا
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {page !== "about" && (
        <Button className="navbar__back" onClick={handleBack}>
          رجوع
          <ArrowBack />
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
