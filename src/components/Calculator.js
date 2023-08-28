'use client';

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Button,
  TextField,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [lastExpression, setLastExpression] = useState('Expression');
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (value === '=') {
      if (expression) {
        try {
          const evalResult = eval(expression);
          setHistory([...history, expression]);
          setExpression(evalResult);
          setLastExpression(expression);
        } catch (error) {
          setExpression('Error');
        }
      }
    } else if (value === 'C') {
      setExpression('');
      setLastExpression('Expression');
    } else {
      setExpression((lastExpression) => lastExpression + value);
    }
  };

  const handleHistoryClick = (value) => {
    setExpression(value);
    setLastExpression('Expression');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid container spacing={2} p={1} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              label={lastExpression}
              variant="outlined"
              fullWidth
              value={expression}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('7')} fullWidth>
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('8')} fullWidth>
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('9')} fullWidth>
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('+')} fullWidth>
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('4')} fullWidth>
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('5')} fullWidth>
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('6')} fullWidth>
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('-')} fullWidth>
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('1')} fullWidth>
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('2')} fullWidth>
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('3')} fullWidth>
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('*')} fullWidth>
              *
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('0')} fullWidth>
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('.')} fullWidth>
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('=')} fullWidth>
              =
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleButtonClick('/')} fullWidth>
              /
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={() => handleButtonClick('C')} fullWidth>
              Clear
            </Button>
          </Grid>
        </Grid>
        <List sx={{ ml: '20px' }} component="nav" aria-label="mailbox folders">
          {history.map((value, index) => {
            return (
              <Box key={index} sx={{ display: 'flex' }}>
                <ListItemButton Divider onClick={() => handleHistoryClick(value)}>
                  <ListItemText primary={value} sx={{ color: 'grey', whiteSpace: 'nowrap' }} />
                </ListItemButton>
                <Divider />
              </Box>
            );
          })}
          {/* <ListItemButton>
            <ListItemText primary={history} />
          </ListItemButton>
          <Divider /> */}
        </List>
      </Box>
    </Container>
  );
};

export default Calculator;
