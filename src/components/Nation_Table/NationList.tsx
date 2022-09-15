import React, {useEffect, useState} from 'react'
import { NationAPI } from '../../apis/nationAPI'
import INationData from '../../types/nation.type'
import { Box,Button, TextField, Collapse, IconButton, Typography, Table,TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, DialogActions, DialogContent, DialogContentText, DialogTitle}
from '@mui/material';
import {KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material';
import { Container } from '@mui/system';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Nation_Add_button_form from './Nation_Add_button_form';
import Nation_Update_button_form from './Nation_Update_button_form'
export type INationList = INationData[]



const NationList: React.FC = (props) => {
const [nats, setnatsList] = useState<INationList>([])

    useEffect(() => {
    NationAPI.getAll()
    .then((list: INationList) => {
    setnatsList(list)
    })
    },[])

    
    return(
    <Container>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell className="table_head">ID</TableCell>
                        <TableCell className="table_head">Nation Name</TableCell>
                        <TableCell className="table_head">Element</TableCell>
                        <TableCell className="table_head">Kage</TableCell>
                        <Nation_Add_button_form/>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {nats.map((nat) => (
                    <Row key={nat.nation_name} row={nat} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
    )
    }
    export default NationList


    function Row(props: { row:INationData}) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    const handleDelete = (id:any) => {
    NationAPI.delete(id)
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
            <TableCell align="left">{row.nation_name}</TableCell>
            <TableCell align="left">{row.element}</TableCell>
            <TableCell align="left">{row.kage_name}</TableCell>
            <TableCell align="left">
                <IconButton aria-label="delete" onClick={(id:any)=>{handleDelete(row.id)}} >
                    <DeleteIcon />
                </IconButton>
                <Nation_Update_button_form current_id={row.id}/>
            </TableCell>

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
)}



    