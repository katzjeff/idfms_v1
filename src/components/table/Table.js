import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      date: "1 March 2019",
      voteHeadDetails: "Jane House Allowance",
      voteHeadCode: "2110301",
      voteHeadDescrip: "House Allowance",
      amount: 25000.0,
      method: "Cheque",
      status: "Approved",
    },
    {
      date: "1 March 2019",
      voteHeadDetails: "Jane NSSF Payment for 2018-19",
      voteHeadCode: "2110102",
      voteHeadDescrip: "NSSF Payment",
      amount: 10000,
      method: "Cheque No. 234",
      status: "Pending",
    },
    {
      date: "1 June 2019",
      voteHeadDetails: "Jack IT Contractor",
      voteHeadCode: "2211310",
      voteHeadDescrip: "Contracted Professional",
      amount: 1200000,
      method: "Bank Deposit",
      status: "Approved",
    },
    {
      date: "1 March 2019",
      voteHeadDetails: "John Doe NSSF Payment",
      voteHeadCode: "2110102",
      voteHeadDescrip: "NSSF Payment for 2017-2018",
      amount: 25000.0,
      method: "Cheque",
      status: "Cancelled",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Vote Head Details</TableCell>
            <TableCell className="tableCell">Vote Head Code</TableCell>
            <TableCell className="tableCell">Vote Head Description</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.voteHeadDetails}</TableCell>
              <TableCell className="tableCell">{row.voteHeadCode}</TableCell>
              <TableCell className="tableCell">{row.voteHeadDescrip}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
