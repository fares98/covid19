import React from "react";
import { CircularProgress } from "@material-ui/core";

import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
};

export default Loading;
