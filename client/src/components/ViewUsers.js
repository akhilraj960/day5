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
const ViewUsers = () => {
  var [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/user").then((data) => {
      console.log(data);
      setStudents(data.data);
    });
  }, []);
  const deleteValues = (id)=>{
    console.log(id) 
    axios.delete(`http://localhost:8080/api/user/${id}`).then(()=>{

    })
  }
  return (
    <Container mt={5}>
      <br />
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
                    <Button>Update</Button>
                    <Button onClick={()=>deleteValues(value._id)} style={{color:'red'}}>Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewUsers;
