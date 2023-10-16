import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto' }}
            noValidate
            autoComplete="off"
        >
            <IconButton sx={{ p: '5px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ m: 1, flex: 1 }}
                placeholder="Search for places..."
                inputProps={{ 'aria-label': 'search for places...' }}
            />        
            <IconButton sx={{ p: '5px', bgcolor:'#f5f5f5' }} aria-label="menu">
                <LocationSearchingIcon fontSize='small' />
            </IconButton>
            </Box>
    );
}