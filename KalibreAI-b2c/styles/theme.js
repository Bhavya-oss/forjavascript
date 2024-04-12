import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Google Sans, sans-serif",
    client_heading: {
      color: "#0D0E10",
      fontSize: "60px",
      fontStyle: "normal",
      lineHeight: "90px",
      "@media (max-width:1500px)": {
        fontSize: "45px",
        lineHeight: "70px",
        fontWeight: 500,
      },
      "@media (max-width:1200px)": {
        fontSize: "38px",
        lineHeight: "82px",
        fontWeight: 500,
      },

      // "@media (max-width:1200px)":{
      //   fontSize: "38px",
      //   lineHeight: "50px",
      //   fontFamily: "Google Sans, sans-serif",

      //   fontWeight: 600,

      // },
      "@media (max-width:900px)": {
        fontSize: "42px",
        lineHeight: "59px",
        fontWeight: 500,
      },
      "@media (max-width:600px)": {
        fontSize: "24px",
        lineHeight: "50px",
        fontWeight: 600,
      },
    },
    client_heading_chip: {
      lineHeight: "90px",
      fontSize: "60px",
      fontWeight: 600,
      width: "400px",
      backgroundColor: "#D1FCFF",
      paddingRight: "16px",
      "@media (max-width:1500px)": {
        fontSize: "38px",
        lineHeight: "70px",
        fontWeight: 600,
        width: "300px",
      },
      "@media (max-width:1200px)": {
        fontSize: "38px",
        lineHeight: "70px",
        fontWeight: 600,
        width: "100px",
        paddingRight: "0px",
      },
      "@media (max-width:900px)": {
        fontSize: "42px",
        lineHeight: "59px",
        fontWeight: 600,
        width: "100px",
        paddingRight: "4px",
      },
      "@media (max-width:600px)": {
        fontSize: "24px",
        lineHeight: "50px",
        fontWeight: 600,
        paddingRight: "2px",
        width: "77px",
      },
    },
    client_sub_heading: {
      color: "#6C6C6B;",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "32px",
      "@media (max-width:1500px)": {
        fontSize: "30px",
        lineHeight: "70px",
        fontWeight: 400,
      },
      "@media (max-width:1200px)": {
        fontSize: "30px",
        lineHeight: "32px",
        fontWeight: 400,
      },
      "@media (max-width:900px)": {
        fontSize: "2rem",
        lineHeight: "32px",

        fontWeight: 400,
      },
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
        lineHeight: "32px",

        fontWeight: 400,
      },
    },

    client_section_two_heading: {
      color: "#001F6D",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      textAlign: "center",
      "@media (max-width:900px)": {
        fontSize: "24px",
        lineHeight: "50px",

        fontWeight: 400,
      },
      "@media (max-width:600px)": {
        fontSize: "24px",
        lineHeight: "32px",

        fontWeight: 600,
      },
    },
    client_section_three_heading: {
      color: "#001F6D",
      fontSize: "50px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "61px",
      textAlign: "center",
      "@media (max-width:900px)": {
        fontSize: "30px",
        lineHeight: "41px",

        fontWeight: 500,
      },
    },

    client_section_three_sub_heading: {
      color: "#253746;",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "25px",
      textAlign: "center",
    },
    client_tab_points_title: {
      color: "#191A15;",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    client_list_item: {
      color: "#1F2937;",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },

    client_tab_points: {
      color: " var(--techflowtemplate-webflow-io-ebony-clay, #1F2937)",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "28px",
    },
    client_carousel_count: {
      color: "#00B404",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "21px",
    },
    client_carousel_count_text: {
      color: "#9EA7B5",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "21px",
    },
    client_rareblocks: {
      color: " #18181B",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "48.75px",
      "@media (max-width:900px)": {
        fontSize: "20px",
        lineHeight: "30px",

        fontWeight: 400,
      },
      "@media (max-width:600px)": {
        fontSize: "19px",
        lineHeight: "30px",

        fontWeight: 400,
      },
    },
    client_tech_hiring: {
      color: "#001F6D",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "22px",
    },

    client_tech_hiring_card_description: {
      color: "#1F2937",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "22px",
      "@media (max-width:900px)": {
        fontSize: "15px",
        lineHeight: "28px",

        fontWeight: 400,
      },
    },
    client_cameron_title: {
      color: "#8E8989",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "28px",
      "@media (max-width:900px)": {
        fontSize: "16px",
        lineHeight: "28px",

        fontWeight: 400,
      },
    },

    client_cameron_sub_title: {
      color: "#8E8989",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      "@media (max-width:900px)": {
        fontSize: "12px",
        lineHeight: "28px",

        fontWeight: 400,
      },
    },

    client_hyper_growing_title: {
      color: "#000",
      fontSize: "45.705px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "68px",

      "@media (max-width:1560px)": {
        fontSize: "36px",
        lineHeight: "55px",
        fontWeight: 400,
      },
      "@media (max-width:1200px)": {
        fontSize: "36px",
        lineHeight: "50px",
        fontWeight: 400,
      },
      "@media (max-width:900px)": {
        fontSize: "32px",
        lineHeight: "45px",

        fontWeight: 400,
      },
      "@media (max-width:600px)": {
        fontSize: "28px",
        lineHeight: "30px",

        fontWeight: 400,
      },
    },

    client_hyper_growing_sub_title: {
      color: "#253746",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "35px",
      "@media (max-width:1560px)": {
        fontSize: "18px",
        lineHeight: "35px",
        fontWeight: 400,
      },
      "@media (max-width:1200px)": {
        fontSize: "18px",
        lineHeight: "25px",
        fontWeight: 400,
      },
      "@media (max-width:900px)": {
        fontSize: "16px",
        lineHeight: "25px",

        fontWeight: 400,
      },
      "@media (max-width:600px)": {
        fontSize: "14px",
        lineHeight: "25px",

        fontWeight: 400,
      },
    },
    candidate_main_heading: {
      background: "linear-gradient(91deg, #8958FF 1.85%, #00DBF1 98.66%)",
      WebkitBackgroundClip: "text", color:"transparent",
      fontSize: "96px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "113px",
      disply: "flex",
      justifyConten: "center",
      alignItems: "center",
      "@media (max-width:1560px)": {
        fontSize: "18px",
        lineHeight: "35px",
        fontWeight: 400,
      },
      "@media (max-width:1200px)": {
        fontSize: "18px",
        lineHeight: "25px",
        fontWeight: 400,
      },
      "@media (max-width:900px)": {
        fontSize: "16px",
        lineHeight: "25px",

        fontWeight: 400,
      },
      "@media (max-width:600px)": {
        fontSize: "14px",
        lineHeight: "25px",

        fontWeight: 400,
      },
    },

    candidates_sub_heading: {
      color: "#6C6C6B;",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "32px",
      disply: "flex",
      justifyConten: "center",
      alignItems: "center",
      "@media (max-width:1500px)": {
        fontSize: "30px",
        lineHeight: "70px",
        fontWeight: 400,
      },
      "@media (max-width:1200px)": {
        fontSize: "30px",
        lineHeight: "32px",
        fontWeight: 400,
      },
      "@media (max-width:900px)": {
        fontSize: "2rem",
        lineHeight: "32px",

        fontWeight: 400,
      },
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
        lineHeight: "32px",

        fontWeight: 400,
      },
    },
  },









  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          textTransform: "none",
          // background: "black",
          borderRadius: "6px",
          fontSize: "16px",

          boxShadow: "none",
          "&:hover": {
            color: "#fff",
            background: "black",
            borderRadius: "6px",
            fontSize: "16px",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
