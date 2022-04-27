import * as React from "react";
import useFetch from "../utilities/useFetch";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Delivery() {
  //fetching data from google sheets
  const { error, isPending, data } = useFetch(
    "https://sheet.best/api/sheets/18a97a45-6208-4683-8253-602409736389"
  );
  return (
    <TableContainer component={Paper}>
      {/* <Table aria-label="simple table">
        <TableHead className="id={`heading${i}`}">
          <TableRow>
            <StyledTableCell align="right">Customer</StyledTableCell>
            <StyledTableCell align="right">Job ref</StyledTableCell>
            <StyledTableCell align="right">Date out</StyledTableCell>
            <StyledTableCell align="right">Revised Date out</StyledTableCell>
            <StyledTableCell align="right">Work Late/Early</StyledTableCell>
            <StyledTableCell align="right">
              Remaining Time to Complete Work:
            </StyledTableCell>
            <StyledTableCell align="right">Head type</StyledTableCell>
            <StyledTableCell align="right">Part Details</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Box</StyledTableCell>
            <StyledTableCell align="right">
              Completed Job Pack Received
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, i) => (
            <StyledTableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell align="right">{item.Customer}</StyledTableCell>
              <StyledTableCell align="right">{item.Job_ref}</StyledTableCell>
              <StyledTableCell align="right">{item.Date_out}</StyledTableCell>
              <StyledTableCell align="right">
                {item.Revised_Date_out}
              </StyledTableCell>
              <StyledTableCell align="right">
                {item.Work_Late_Early}
              </StyledTableCell>
              <StyledTableCell align="right">
                {item.Remaining_Time_to_Complete_Work}
              </StyledTableCell>
              <StyledTableCell align="right">{item.Head_type}</StyledTableCell>
              <StyledTableCell align="right">
                {item.Part_Details}
              </StyledTableCell>
              <StyledTableCell align="right">{item.Position}</StyledTableCell>
              <StyledTableCell align="right">{item.Box}</StyledTableCell>
              <StyledTableCell align="right">
                {item.Completed_Job_Pack_Received}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table> */}
    </TableContainer>
  );
}

// export default Delivery;

// import React, { useState } from "react";

// import * as XLSX from "xlsx";

// function Delivery() {
//   const [items, setItems] = useState([]);

//   const readExcel = (file) => {
//     const promise = new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsArrayBuffer(file);

//       fileReader.onload = (e) => {
//         const bufferArray = e.target.result;

//         const wb = XLSX.read(bufferArray, { type: "buffer" });

//         const wsname = wb.SheetNames[0];

//         const ws = wb.Sheets[wsname];

//         const data = XLSX.utils.sheet_to_json(ws);

//         resolve(data);
//       };

//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });

//     promise.then((d) => {
//       console.log(d);
//       setItems(d);
//     });
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         onChange={(e) => {
//           const file = e.target.files[0];
//           readExcel(file);
//         }}
//       />

//       <table class="table container">
//         <thead>
//           <tr>
//             <th scope="col">Job ref</th>
//             <th scope="col">Date out</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((d) => (
//             <tr key={d.Item}>
//               <th>{d.__EMPTY_1}</th>
//               <th>{d.__EMPTY_4}</th>
//               <th>{d.__EMPTY_5}</th>
//               <th>{d.__EMPTY_6}</th>
//               <th>{d.__EMPTY_7}</th>
//               <th>{d.__EMPTY_8}</th>
//               <th>{d.__EMPTY_9}</th>
//               <th>{d.__EMPTY_10}</th>
//               <th>{d.__EMPTY_12}</th>
//               <th>{d.__EMPTY_13}</th>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Delivery;
