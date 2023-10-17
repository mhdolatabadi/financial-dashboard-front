import dayjs from "dayjs";
import { useState } from "react";
import axios from "axios";
import { TextField, DatePicker, ContainedButton } from "../common";
import { User } from "../../models/user";
import { PersianTexts } from "../../persianTexts";
import { UsernameSelect } from "./UsernameSelect";
import { AmountUnitTextField } from "./AmountUnitTextField";

interface Props {
  users: Partial<User>[];
}

export function SubmitProfit({ users }: Props) {
  const [username, setUsername] = useState<string>();
  const [date, setDate] = useState<number>(new Date().getTime());
  const [amount, setAmount] = useState<number>();
  const [unit, setUnit] = useState<string>("rial");
  const [description, setDescription] = useState<string>();
  const handleSubmitTransaction = () => {
    axios.post("http://localhost:3456/profit", {
      username,
      date: new Date(date),
      amount,
      unit,
      description,
    });
  };
  return (
    <div>
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
