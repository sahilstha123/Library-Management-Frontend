import {PaletteMode, alpha, createTheme} from "@mui/material"
const emerald = "#0a5cda";
const gold = "#f5c462"
const navy = "#0F1114"

export const getTheme = (mode: PaletteMode) =>{
    return createTheme({
        palette:{
            mode,
            primary:{
                main: emerald,
                contrastText: '#ffffff',
            },
            secondary:{
                main: gold,
            },
            background:{
                default: mode === "light" ? "#f8fafc" : navy,
                paper: mode === "light" ? "#ffffff": navy,
            },
            text:{
                primary: mode === "light" ? "#1e293b" : "#f8fafc",
                secondary: mode === "light" ? "#64748b" : "#94a3b8",
            },
        },
        typography:{
            fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
            h6:{
                fontWeight: 700,
                letterSpacing: "-0.5px",
            },
            button:{
                textTransform: "none",
                fontWeight: 600
            },
        },
        components:{
            MuiAppBar: {
                styleOverrides:{
                    root:{
                        backgroundColor: mode === "light" ? alpha ("#ffffff", 0.8) : navy,
                        backdropFilter: "blur(12px)",
                        color: mode === "light" ? emerald : "#ffffff",
                        boxShadow: "none",

                    }
                }
            }
        }
    })
}