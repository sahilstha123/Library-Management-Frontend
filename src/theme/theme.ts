import { PaletteMode, alpha, createTheme } from "@mui/material"
const emerald = "#0a5cda";
const darkBlue = "#1877F2"
export const navy = "#0F1114"

export const getTheme = (mode: PaletteMode) => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: emerald,
                contrastText: '#ffffff',
            },
            secondary: {
                main: darkBlue,
            },
            background: {
                default: mode === "light" ? "#f8fafc" : navy,
                paper: mode === "light" ? "#ffffff" : navy,
            },
            text: {
                primary: mode === "light" ? "#1e293b" : "#f8fafc",
                secondary: mode === "light" ? "#64748b" : "#94a3b8",
            },
        },
        typography: {
            fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
            h6: {
                fontWeight: 700,
                letterSpacing: "-0.5px",
            },
            button: {
                textTransform: "none",
                fontWeight: 600
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === "light" ? alpha("#ffffff", 0.8) : navy,
                        backdropFilter: "blur(12px)",
                        color: mode === "light" ? emerald : "#ffffff",
                        boxShadow: "none",
                        borderBottom: `1px solid ${mode === "light" ? alpha(emerald, 0.1) : alpha("#ffffff", 0.1)}`
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        padding: "8px 16px"
                    }
                }
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: mode === "light" ? "#ffffff" : navy,
                        backgroundImage: "none"
                    }
                }
            }
        }
    })
}