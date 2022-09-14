import React, {useEffect, useState} from 'react'
import { VillageAPI } from '../apis/villageAPI'
import IVillageData from '../types/village.type'
import { NationAPI } from '../apis/nationAPI'
import INationData from '../types/nation.type'
import { Box,Button, Collapse, IconButton, Typography, Table,TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper}
from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material';
import { Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import Village_Add_button_form from './Village_Add_button_form';
import Village_Update_button_form from './Village_Update_button_form';


export type IVillageList = IVillageData[]

const VillageList: React.FC = (props) => {
const [vills, setvillsList] = useState<IVillageList>([])

  useEffect(() => {
  VillageAPI.getAll()
  .then((list: IVillageList) => {
  setvillsList(list)
  })
  }, [])

  const shoot = () => {
  alert("Great Shot!");
  }

  return(
  <Container>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="left">Village Name</TableCell>
            <TableCell align="left">Nation ID</TableCell>
            <Village_Add_button_form />
          </TableRow>

        </TableHead>
        <TableBody>
          {vills.map((vill) => (
          <Row key={vill.village_name} row={vill} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
  )
  }
  export default VillageList


  function Row(props: { row:IVillageData}) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const handleDelete = (id:any) => {
  VillageAPI.delete(id)
  window.location.reload()
  }

  return (
  <React.Fragment>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={()=> setOpen(!open)}
          >
          {open ?
          <KeyboardArrowUp /> :
          <KeyboardArrowDown />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="left">{row.village_name}</TableCell>
      <TableCell align="left">{row.nation_id}</TableCell>
      
      <IconButton aria-label="delete" onClick={(id:any)=>{handleDelete(row.id)}} >
         <DeleteIcon />
      </IconButton>
      <Village_Update_button_form current_id={row.id} />


    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Details
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.description}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>
  );
  }