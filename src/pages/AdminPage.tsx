import { Tab } from "@mui/material";
import {
  CreateUser,
  SubmitProfit,
  SubmitTransaction,
  ProfitsTable,
  TransactionsTable,
  UserInformation,
} from "../components/admin";
import { AllUsersTable } from "../components/admin/AllUsersTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../models/user";
import { Section } from "../components/common";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { PersianTexts } from "../persianTexts";
import { Page } from "../App";

interface Props {
  username: string | undefined;
  accessToken: string | undefined;
  handleChangePage: (
    page: Page,
    username: string,
    accessToken: string
  ) => unknown;
}

export function AdminPage({ username, accessToken, handleChangePage }: Props) {
  const [selectedUser, setSelectedUser] = useState<string>();
  const [users, setUsers] = useState<Partial<User>[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("1");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3456/user/username/${username}`, {
        headers: { authorization: "" },
      })
      .then((res) => {
        setSelectedUser(res.data.id);
        console.log(res.data);
        setIsAdmin(res.data.isAdmin);
      });
    if (isAdmin) {
      axios
        .get("http://localhost:3456/user", { headers: { authorization: "" } })
        .then((res) => {
          setUsers(res.data);
        });
    }
  }, [username, isAdmin]);
  const handleCreateUser = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    axios
      .post("http://localhost:3456/user", {
        username,
        password,
      })
      .then((res) => {
        setUsers([
          ...users,
          {
            username,
            password,
            id: res.data,
            firstname: undefined,
            lastname: undefined,
          },
        ]);
      });
  };
  return (
    <div style={{ width: "100%", padding: "30px 0 0" }}>
      {isAdmin ? (
        <Section>
          <TabContext value={selectedTab}>
            <TabList
              onChange={(e, value) => setSelectedTab(value)}
              aria-label="basic tabs example"
            >
              <Tab
                label={PersianTexts.usersList}
                value="1"
              />
              <Tab
                label={PersianTexts.createNewUser}
                value="2"
              />
              <Tab
                label={PersianTexts.submitTransaction}
                value="3"
              />

              <Tab
                label={PersianTexts.submitProfit}
                value="4"
              />
            </TabList>

            <TabPanel value="1">
              <AllUsersTable
                users={users}
                selectUser={(id) => setSelectedUser(id)}
              />
            </TabPanel>
            <TabPanel value="2">
              <CreateUser handleCreateUser={handleCreateUser} />
            </TabPanel>
            <TabPanel value="3">
              <SubmitTransaction users={users} />
            </TabPanel>
            <TabPanel value="4">
              <SubmitProfit users={users} />
            </TabPanel>
          </TabContext>
        </Section>
      ) : null}
      {selectedUser ? (
        <UserInformation isAdmin={isAdmin} id={selectedUser} />
      ) : null}
      {selectedUser ? <TransactionsTable userId={selectedUser} /> : null}
      {selectedUser ? <ProfitsTable userId={selectedUser} /> : null}
    </div>
  );
}
