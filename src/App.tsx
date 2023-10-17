import "./App.css";
import { AdminPage } from "./pages/AdminPage";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { LoginPage } from "./pages/LoginPage";
import { useState } from "react";

export enum Page {
  login,
  admin,
}

function App() {
  const [currentPage, setCurrentPage] = useState(Page.login);
  const [username, setUsername] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();
  const handleChangePage = (
    page: Page,
    username: string | undefined,
    accessToken: string
  ) => {
    setCurrentPage(page);
    setUsername(username);
    setAccessToken(accessToken);
  };
  return (
    <div className="App">
      <AppBar
        sx={{
          padding: "20px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img alt="dornico" width="50px" height="50px" src="/dornico.svg" />
        <Toolbar>
          <Typography fontSize="20px" color="primary" fontWeight="700">
            صندوق سرمایه‌گذاری خصوصی درنیکو
          </Typography>
        </Toolbar>
      </AppBar>
      {currentPage === Page.login ? (
        <LoginPage handleChangePage={handleChangePage} />
      ) : null}
      {currentPage === Page.admin ? (
        <AdminPage
          username={username}
          accessToken={accessToken}
          handleChangePage={handleChangePage}
        />
      ) : null}
    </div>
  );
}

export default App;
