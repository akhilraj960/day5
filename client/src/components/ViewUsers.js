import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import axios from "axios";
import AddUser from "./AddUser";

const ViewUsers = () => {
  var [update, setUpdate] = useState(false);
  var [students, setStudents] = useState([]);
  var [selected, setSelected] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/user").then((data) => {
      console.log(data);
      setStudents(data.data);
    });
  }, []);

  const updateValue = (value) => {
    console.log(value);
    setSelected(value);
    setUpdate(true);
  };

  const deleteValues = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/api/user/${id}`).then(() => {});
  };

  var view = (
    <TableContainer component={Paper} mt={5}>
      <Table align="center">
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Coures</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((value, index) => {
            return (
              <TableRow>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{value.name}</TableCell>
                <TableCell align="center">{value.age}</TableCell>
                <TableCell align="center">{value.course}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      updateValue(value);
                    }}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteValues(value._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );

  if(update)view=<AddUser data={selected} method='put'/>

  return (
    <Container mt={5}>
      <br />
      {view}
    </Container>
  );
};

export default ViewUsers;
