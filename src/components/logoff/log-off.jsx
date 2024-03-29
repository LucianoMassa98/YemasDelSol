import { CircularProgress } from "@mui/material";

export const Logoff = () => {
  window.location.href = "/login";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};
