
export default [
  {
    value: "theater",
    label: "theater",
  },
  {
    value: "concert",
    label: "concert",
  },
  {
    value: "football game",
    label: "football game",
  },
  {
    value: "basketball game",
    label: "basketball game",
  },
  {
    value: "gallery exibition",
    label: "gallery exibiton",
  },
  {
    value: "museum visit",
    label: "museum visit",
  },
  {
    value: "other",
    label: "other",
  },
];

// export default function SelectType() {
//   const [type, setType] = React.useState("concert");

//   const handleChange = (event) => {
//     setType(event.target.value);
//   };

//   return (
//     <TextField
//       id="filled-select-currency-native"
//       select
//       label="Type"
//       value={type}
//       onChange={handleChange}
//       SelectProps={{
//         native: true,
//       }}
//       helperText="Please select type of the ticket"
//       variant="outlined"
//     >
//       {ticketTypes.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </TextField>
//   );
// }
