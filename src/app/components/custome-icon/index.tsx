"use client"
import { Icon } from '@mui/material';
import React from 'react';

type PropsType={
    iconComp:React.ReactNode;
    size?:number;
    color?:string;
}

const CustomeIcon:React.FC<PropsType> = ({iconComp,size,color}) => {
  return (
    <Icon sx={{width:size, height:size,color:color}}>
        {iconComp}
    </Icon>
  )
}

export default CustomeIcon