import axios from "axios";
import { useState } from "react";
import { ContainedButton, Section, TextField } from "../components/common";
import { PersianTexts } from "../persianTexts";
import { Page } from "../App";
import { SuccessToast } from "../components/common/SuccessToast";
import { ErrorToast } from "../components/common/ErrorToast";

interface Props {
  handleChangePage: (
    page: Page,
    username: string | undefined,
    accessToken: string
  ) => unknown;
}

export function LoginPage({ handleChangePage }: Props) {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();
  const loginHandler = () => {
    console.log(accessToken);
    axios
      .post("http://localhost:3456/auth/login", { username, password })
      .then(({ data }) => {
        setAccessToken(data.access_token);
        SuccessToast.showToast();
        handleChangePage(Page.admin, username, data.access_token);
      })
      .catch(() => {
        ErrorToast.showToast();
      });
  };

  return (
    <Section sx={{ width: "500px", margin: "200px auto" }}>
      <div style={{ marginBottom: "20px", width: "100%" }}>
        <TextField
          label={PersianTexts.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label={PersianTexts.password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <ContainedButton variant="contained" onClick={loginHandler}>
        {PersianTexts.enter}
      </ContainedButton>
    </Section>
  );
}
