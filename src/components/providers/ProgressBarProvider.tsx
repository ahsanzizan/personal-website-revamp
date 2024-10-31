"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = () => {
  return (
    <ProgressBar
      height="4px"
      color="#FAF9F6"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
};

export default ProgressBarProvider;
