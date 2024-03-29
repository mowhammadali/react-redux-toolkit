import React, { useState } from "react"
import { Box, Tab} from "@mui/material"
import { useNavigate } from "react-router-dom";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

const Navbar = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: "100%", typography: "body1" , backgroundColor: '#f5f5f5'}}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        sx={{paddingTop: '10px'}}
                    >
                        <Tab label="Todo List" value="1" onClick={() => navigate('/')}/>
                        <Tab label="Users" value="2" onClick={() => navigate('/users')}/>
                        <Tab label="Create User" value="3" onClick={() => navigate('/create-user')}/>
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    )
}

export default Navbar
