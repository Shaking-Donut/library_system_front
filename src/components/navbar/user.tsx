import { Logout } from "@mui/icons-material";
import { Avatar, IconButton, Stack } from "@mui/material";

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: 32,
            height: 32,
        },
        children: `${name.split(' ')[0][0]}`,
    };
}

export default function UserButton() {
    return <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Avatar {...stringAvatar("User")} />
            <p>User</p>
        </Stack>
        <IconButton color="error" size="medium">
            <Logout fontSize="small" />
        </IconButton>
    </Stack>
}