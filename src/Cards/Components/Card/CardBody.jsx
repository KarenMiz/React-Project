import { CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React from 'react'

 
export default function CardBody({ title, subtitle, phone, address, bizNumber }) {
    return (
        <>
            <CardHeader
                title={title}
                subheader={subtitle}
            />
            <Divider variant='middle' />
            <CardContent>
                <Typography variant='body2' color="text.secondary">
                    <strong>Phone:</strong> {phone}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    <strong>Address:</strong> {address.street} {address.houseNumber} {address.city}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    <strong>Card Number:</strong> {bizNumber}
                </Typography>
            </CardContent>
           
        </>
    )
}