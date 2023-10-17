import { FormControlLabel, MenuItem, Radio, RadioGroup } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import axios from "axios";
import { ContainedButton, DatePicker, TextField } from "../common";
import { User } from "../../models/user";
import { PersianTexts } from "../../persianTexts";
import { UsernameSelect } from "./UsernameSelect";
import { AmountUnitTextField } from "./AmountUnitTextField";

interface Props {
  users: Partial<User>[];
}

export function SubmitTransaction({ users }: Props) {
  const [username, setUsername] = useState<string>();
  const [date, setDate] = useState<number>(new Date().getTime());
  const [type, setType] = useState<string>("in");
  const [amount, setAmount] = useState<number>();
  const [unit, setUnit] = useState<string>("rial");
  const [description, setDescription] = useState<string>();
  const handleSubmitTransaction = () => {
    console.log(date);
    axios.post("http://localhost:3456/transaction", {
      username,
      date: new Date(date),
      type,
      amount,
      unit,
      description,
    });
  };
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ padding: "10px" }}
      >
        <FormControlLabel value="in" control={<Radio />} label="واریز" />
        <FormControlLabel value="out" control={<Radio />} label="برداشت" />
      </RadioGroup>
      <UsernameSelect
        username={username}
        users={users}
        onChange={(e) => setUsername(e.target.value)}
      />
      <DatePicker
        label={PersianTexts.date}
        value={dayjs(date)}
        onChange={(value) => setDate(dayjs(value).valueOf())}
      />
      <AmountUnitTextField
        unit={unit}
        onAmountChange={(e) => setAmount(+e.target.value)}
        amount={amount}
        onUnitChange={(e) => setUnit(e.target.value)}
      />
      <TextField
        multiline
        label={PersianTexts.description}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ContainedButton variant="contained" onClick={handleSubmitTransaction}>
        {PersianTexts.submit}
      </ContainedButton>
    </div>
  );
}
