import { Box, Card, Grid } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { ShadiStyle } from '../../styles/ShadiStyle'
import { publicInterceptor } from '../../config/AxiosConfig'
import CustomTextField from '../../components/CustomTextField/CustomTextField'
import ApiContextConsumer from '../../hooks/ApiContextConsumer'

const Login = () => {
    const { authService } = ApiContextConsumer();
    const authServiceObject = useMemo(() => new authService(), []);
    const [login, setLogin] = useState("");
    const myResponse = async () => {
        const res = await authServiceObject?.userProfile();
        console.log(res);
    };

    useEffect(() => {
        myResponse()
    }, [])


    return (
        <Box sx={ShadiStyle.displaStyleOne()}>
            <Card sx={{ height: "50%", width: "50%" }}>
                <Box sx={ShadiStyle.displaStyleOne()}>
                    <Box>
                        <Box>
                            <CustomTextField
                                value={login}
                                onChange={(e) => { setLogin(e.target.value) }}
                                label={"amit"} />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <CustomTextField label={"amit"} />
                        </Box>
                    </Box>

                </Box>

            </Card>
        </Box>
    )
}

export default Login
