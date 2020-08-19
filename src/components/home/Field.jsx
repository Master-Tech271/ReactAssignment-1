import React from 'react';
import TextField from '@material-ui/core/TextField';

const Field = (props) => {
    return (
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id={props.id}
              label={props.label}
              name={props.name}
              autoComplete="off"
              type={props.type}
              value={props.value}
              onChange={props.handle}
            />
    )
}

export default Field;