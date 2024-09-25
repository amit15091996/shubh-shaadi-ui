import { Card, ThemeProvider } from "@mui/material"
import React from "react"
import { RouterProvider } from "react-router"
import ShadiRoutes from "./routes/ShadiRoutes"
import { ShadiTheme } from "./theme/ShadiTheme"

function App() {

  return (
    <ThemeProvider theme={ShadiTheme()}>
      <Card sx={{ backgroundColor:"#F1F3F8",borderRadius: 0,height: "100dvh",width: "100dvw"}}>
        <RouterProvider router={ShadiRoutes} />
      </Card>
    </ThemeProvider>
  )
}

export default App
