import React, { useState } from "react"
import css from "./CreateUser.module.css"
import { useDispatch, useSelector } from "react-redux"
import { TextField, Button, CircularProgress, Box } from "@mui/material"
import { postUser } from "./createUserSlice"

const CreateUser = () => {
    const dispatch = useDispatch()
    const createUserState = useSelector((state) => state.createUserState)

    const [userData, setUserData] = useState({
        name: "",
        job: "",
        email: "",
    })

    const handleUserDataChange = (event) => {
        setUserData((user) => ({
            ...user,
            [event.target.name]: event.target.value,
        }))
    }

    const addNewUser = () => {
        if (userData.name && userData.job && userData.email) {
            dispatch(postUser(userData))
            setUserData({ name: "", job: "", email: "" })
        }
    }

    return (
        <div className={css.createUserContainer}>
            <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={userData.name}
                name="name"
                onChange={handleUserDataChange}
            />
            <TextField
                label="Job"
                variant="outlined"
                size="small"
                value={userData.job}
                name="job"
                onChange={handleUserDataChange}
            />
            <TextField
                fullWidth
                label="Email"
                size="small"
                value={userData.email}
                name="email"
                onChange={handleUserDataChange}
            />
            <Button
                variant="contained"
                sx={{ width: "270px" }}
                onClick={addNewUser}
            >
            {
                createUserState.isPending
                ?
                <Box sx={{ display: "flex" }}>
                    <CircularProgress color="secondary" size={30}/>
                </Box>
                :
                'Add User'
            }
            </Button>
        </div>
    )
}

export default CreateUser
