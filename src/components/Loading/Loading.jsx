import { Box, Card, CircularProgress } from '@mui/material'
import React from 'react'
import { IoClose } from "react-icons/io5";

const Loading = ({minHeight,minWidth}) => {
  return (
    <Card sx={{minHeight:minHeight?minHeight:200,height:"100%",width:"100%",minWidth:minWidth?minWidth:300,display:"flex",justifyContent:"center",alignItems:"center"}}>
      
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </Card>
  )
}

export default Loading