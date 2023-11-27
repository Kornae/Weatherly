import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

const Autocomplete = React.forwardRef(function Autocomplete(props) {
    return (
        <React.Fragment>
            <StyledAutocompleteRoot
                onSubmit={props.submit}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <EditLocationAltIcon />
                </IconButton>
                <StyledInput
                    placeholder='Search…'
                    onChange={props.change}
                    onKeyUp={props.onKeyDown}
                />
                <Divider orientation="vertical" variant="middle" flexItem />
                <IconButton
                    onClick={props.click}
                    sx={{ p: '10px' }} aria-label="menu">
                    <SearchIcon />
                </IconButton>

            </StyledAutocompleteRoot>
        </React.Fragment>
    );
});

Autocomplete.propTypes = {
    /**
     * If `true`, the input can't be cleared.
     * @default false
     */
    disableClearable: PropTypes.oneOf([false]),
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool,
    /**
     * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
     * @default false
     */
    readOnly: PropTypes.bool,
};

export default function AutocompleteIntroduction(props) {
    return <Autocomplete
        click={props.click}
        change={props.change}
        onKeyDown={props.onKeyDown}
        submit={props.submit}
        />;
}

const cyan = {
    50: '#E9F8FC',
    100: '#BDEBF4',
    200: '#99D8E5',
    300: '#66BACC',
    400: '#1F94AD',
    500: '#0D5463',
    600: '#094855',
    700: '#063C47',
    800: '#043039',
    900: '#022127',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const StyledAutocompleteRoot = styled('div')(
    ({ theme }) => `
    font-family: 'Inter', sans-serif;
  font-weight: 400;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? cyan[300] : cyan[500]};
  background: ${theme.palette.mode === 'dark' ? cyan[900] : '#fff'};
  border: 0.5px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
        };
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  overflow: hidden;
@media (min-width: 1023px) {
  min-width: 250px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  min-width: 400px;
  }

  @media (min-width: 368px) and (max-width: 767px){
  min-width: 300px;
  }

  @media (max-width: 367px) {
  min-width: 220px;
  }

  &.focused {
    border-color: ${grey[400]};
     box-shadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;'
  }

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInput = styled('input')(
    ({ theme }) => `
  font-size: 0.875rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: none;
  padding: 8px;
  outline: 0;
  flex: 1 0 auto;
`,
);
