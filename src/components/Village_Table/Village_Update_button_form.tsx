import React, {useEffect, useState} from 'react'
import { NationAPI } from '../../apis/nationAPI'
import INationData from '../../types/nation.type'
import { VillageAPI } from '../../apis/villageAPI'
import { Box,Button, TextField, Collapse, IconButton, Typography, Table,TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, DialogActions, DialogContent, DialogContentText, DialogTitle}
from '@mui/material';
import {KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material';
import { Container } from '@mui/system';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';



function Village_Update_button_form(props:{current_id:number}) {
const [open, setOpen] = React.useState(false);
const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
   
        const [villageNameData, setVillageNameData] = useState("")
        const [villageDescriptionData, setVillageDescripionData] = useState("")
        const [nationIdData, setNationIdData] = useState("")
        const { current_id } = props

        const changeVillageName=(e:any) => {
        setVillageNameData(e.target.value)
        console.log(e.target.value)
        }
        const changeVillageDescription=(e:any) => {
        setVillageDescripionData(e.target.value)
        console.log(e.target.value)
        }
        const changeNationId=(e:any) => {
        setNationIdData(e.target.value)
        console.log(e.target.value)
        }

        const handleVillageClick = () => {

        VillageAPI.update(current_id,{village_name: villageNameData, description: villageDescriptionData, nation_id: nationIdData})
        handleClose()
        window.location.reload()
        }

        const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
        };

        const handleClose = () => {
        setOpen(false);
        };



        return (
        <div>

            <IconButton onClick={handleClickOpen('paper')} aria-label="delete">
                <AddCircleIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description">
                <DialogTitle id="scroll-dialog-title">Input data to Nation List</DialogTitle>
                <DialogContent dividers={scroll==='paper' }>
                    <DialogContentText id="scroll-dialog-description" tabIndex={-1}>

                       
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },
                                    }} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Village Name" placeholder="Add Village name here"
                                variant="outlined" value={villageNameData} onChange={changeVillageName} />
                            <TextField id="outlined-basic" label="Nation ID" placeholder="Add Nation ID here"
                                variant="outlined" value={nationIdData} onChange={changeNationId} />
                            <TextField id="outlined-multiline-static" label="Description" multiline rows={4}
                                placeholder="Add description here" value={villageDescriptionData}
                                onChange={changeVillageDescription} />
                        </Box>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleVillageClick}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
        )

        }

export default Village_Update_button_form