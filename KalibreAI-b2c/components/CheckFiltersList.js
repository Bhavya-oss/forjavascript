import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Checkbox, Typography } from '@mui/material';

export default function CheckFiltersList() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#888", padding: "16px 16px 0 16px" }}>
                Skills
            </Typography>
            <List dense sx={{}}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            disablePadding
                            dense
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}