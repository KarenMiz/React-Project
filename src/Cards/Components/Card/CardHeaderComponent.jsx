import { CardMedia } from '@mui/material'
import React from 'react'
 
export default function CardHeaderComponent({image}) {
    return (
        <CardMedia
            component="img"
            height="140"
            width="20"
            image={image.url}
            alt={image.alt}>
                
        </CardMedia>
    )
}