import { TextField } from "@mui/material";

export default function Input({
  label,
  name,
  type,
  disabled,
  onChange = () => 0,
}) {
  return (
    <TextField
      variant="outlined"
      label={label}
      type={type}
      name={name}
      disabled={disabled}
      onChange={onChange}
      required
      sx={{
        "& .MuiInputLabel-root": { color: "#FFFFFF" }, //styles the label
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#FFFFFF" },
        },
      }}
    />
  );
}
