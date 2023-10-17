import { Button, TextField, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

const RowFlex = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "cetner",
  justifyContent: "space-evenly",
  flexDirection: "row",
  border: "2px solid white",
  padding: "10px",
  height: "40px",
}));
interface Props {
  label: string;
  value: number | string | undefined | null;
  isAdmin: boolean;
  onEdit?: (value: string) => unknown;
}
export function DataDisplayWithEdit({ label, value, onEdit, isAdmin }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);
  useEffect(() => {
    setNewValue(value);
  }, [value]);
  const handleEditButtonClick = () => {
    if (!editMode) {
      setEditMode(true);
    } else {
      if (onEdit) onEdit(String(newValue));
      setEditMode(false);
    }
  };
  const handleCancelEdit = () => {
    setEditMode(false);
  };
  return (
    <RowFlex>
      <div style={{ alignItems: "center", display: "flex" }}>
        <div style={{ marginLeft: "10px" }}>
          <Typography color="primary" fontWeight="500">
            {label}:
          </Typography>
        </div>
        {editMode && isAdmin ? (
          <TextField
            size="small"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          ></TextField>
        ) : (
          <Typography fontWeight="700">{newValue ?? "وارد نشده"}</Typography>
        )}
        {isAdmin && onEdit ? (
          <Button
            onClick={() => handleEditButtonClick()}
            sx={{ padding: 0, width: "24px" }}
          >
            {editMode ? "ذخیره" : <EditIcon />}
          </Button>
        ) : null}
        {editMode ? (
          <Button onClick={handleCancelEdit} color="error">
            انصراف
          </Button>
        ) : null}
      </div>
    </RowFlex>
  );
}
