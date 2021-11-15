import { Box, createTheme, Paper, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import HeadBar from "./head_bar";


const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});
declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        platte: {
            mode: string,
        }
        status?: {
            danger?: string;
        };
    }
}


const Layout: React.FC = ({ children }) => {
    const [mode, setMode] = React.useState('dark')
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            }
        }),
        [],
    );
    const theme = React.useMemo(
        () =>
            createTheme({
                platte: {
                    mode,
                }
            }),
        [mode],
    );
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Stack>

                    <HeadBar />

                    <main>
                        {children}
                    </main>

                    <Paper elevation={3} sx={{ textAlign: "center", marginTop: "20px", lineHeight: "4em", height: "4em", color: 'success.light', backgroundColor: 'primary.dark' }}>
                        Powered by Lægjarn devs.
                    </Paper>
                </Stack>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Layout