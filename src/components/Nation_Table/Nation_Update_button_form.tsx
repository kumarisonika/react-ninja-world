import React, {useEffect, useState} from 'react'
import { NationAPI } from '../../apis/nationAPI'
import INationData from '../../types/nation.type'
import { VillageAPI } from '../../apis/villageAPI'
import { Box,Button, TextField, Collapse, IconButton, Typography, Table,TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, DialogActions, DialogContent, DialogContentText, DialogTitle}
from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import AddCircleIcon from '@mui/icons-material/AddCircle';



function Update_button_form(props:{ flags?:string, current_id:number}) {
const [open, setOpen] = React.useState(false);
const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const [nanData, setnanData] = useState<INationData>({id:0,nation_name:"",element:"",kage_name:"",description:""})
        const [nationNameData, setNationNameData] = useState("")
        const [elementData, setElementData] = useState("")
        const [kageNameData, setKageNameData] = useState("")
        const [nationDescriptionData, setNationDescriptionData] = useState("")
        const { current_id } = props

       

        const changeNationName=(e:any) => {
        setNationNameData(e.target.value)
        console.log(e.target.value)
        }
        const changeElement=(e:any) => {
        setElementData(e.target.value)
        console.log(e)
        }
        const changeKageName=(e:any) => {
        setKageNameData(e.target.value)
        console.log(e)
        }
        const changeNationDescription=(e:any) => {
        setNationDescriptionData(e.target.value)
        console.log(e)
        }

        const handleNationClick = () => {

        NationAPI.update(current_id,{nation_name: nationNameData, element: elementData, kage_name: kageNameData,
        description:nationDescriptionData})
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

                        <Box component="form" sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                                    }} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Nation Name" placeholder="Add Nation name here"
                                variant="outlined" value={nationNameData} onChange={changeNationName} />
                            <TextField id="outlined-basic" label="Element Name" placeholder="Add Element name here"
                                variant="outlined" value={elementData} onChange={changeElement} />
                            <TextField id="outlined-basic" label="Kage Name" placeholder="Add Kage-Name here"
                                variant="outlined" value={kageNameData} onChange={changeKageName} />
                            <TextField id="outlined-multiline-static" label="Description" multiline rows={4}
                                placeholder="Add description here" value={nationDescriptionData}
                                onChange={changeNationDescription} />
                        </Box>

                       

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleNationClick}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
        )

        }

        export default Update_button_form