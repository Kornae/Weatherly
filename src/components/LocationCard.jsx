import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function CardInvertedColors() {
    return (
        <Card sx={{ padding: '35px', borderRadius: '20px' }} variant="soft" color="inherit" invertedColors >
            <CardContent orientation="horizontal">
                <CardContent>
                    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '300' }} level="h3">Los Angeles, CA</Typography>
                </CardContent>
            </CardContent>
        </Card>
    );
}