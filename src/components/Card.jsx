import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function CardVariants(props) {
    return (
        <Box
            sx={{
                width: 'auto',
                display: 'grid',
                margin: 1,
            }}
        >
            <Card variant="plain" sx={{ borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px', width:'auto' }}>
                <CardContent>
                    <Typography level="title-md">{props.day}</Typography>

                    <div id="weekly-img">
                        <img id="icon" src={props.dailyImg} alt="icon" />
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Typography style={{padding:'0px 5px'}}>{props.temp}°</Typography>
                        <Typography style={{ padding: '0px 5px', color:'#a8a8a8', fontWeight: '200'}}>{props.low}°</Typography>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
}