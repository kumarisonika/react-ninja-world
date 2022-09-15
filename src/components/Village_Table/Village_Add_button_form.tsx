import React, {useEffect, useState} from 'react'
import { VillageAPI } from '../../apis/villageAPI'
import { NationAPI } from '../../apis/nationAPI'
import INationData from '../../types/nation.type'
import { Box,Button, TextField,Autocomplete , Collapse, IconButton, Typography, Table,TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, DialogActions, DialogContent, DialogContentText, DialogTitle}
from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Dialog, { DialogProps } from '@mui/material/Dialog';

export type INationList = INationData[]


function Village_Add_button_form() {
        const [open, setOpen] = React.useState(false);
        const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
        const [nats, setnatsList] = useState<INationList>([])
        const [natId, setNatId] = useState('')
        const [villageNameData, setVillageNameData] = useState("")
        const [villageDescriptionData, setVillageDescripionData] = useState("")
        const [nationIdData, setNationIdData] = useState("")

        useEffect(() => {
        NationAPI.getAll()
        .then((list: INationList) => {
        setnatsList(list)
        })
        },[])

        const handleDropChange = (event: SelectChangeEvent) => {
            setNatId(event.target.value);
        };

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
        VillageAPI.create({village_name: villageNameData, description: villageDescriptionData, nation_id: natId})
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

            <Button onClick={handleClickOpen('paper')} className="add_button" variant="contained">
                Add </Button>

            <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description">
                <DialogTitle id="scroll-dialog-title">Input data to Village List</DialogTitle>
                <DialogContent dividers={scroll==='paper' }>
                    <DialogContentText id="scroll-dialog-description" tabIndex={-1}>


                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },
                                 }} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Village Name" placeholder="Add Village name here"
                                variant="outlined" value={villageNameData} onChange={changeVillageName} />
                           {/*  <TextField id="outlined-basic" label="Nation ID" placeholder="Add Nation ID here"
                                variant="outlined" value={nationIdData} onChange={changeNationId} /> */}


                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Nation Id</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={natId} label="Nation ID"
                                    onChange={handleDropChange}>
                                    {nats.map((natt) => (
                                    <MenuItem value={natt.id}>{natt.nation_name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>


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
        export default Village_Add_button_form