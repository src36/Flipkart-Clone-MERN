import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const TemplateContext = React.createContext(null);

export const TemplateProvider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "unset",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-child": {
            paddingTop: 0,
          },
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: 0,
        },
      },
    },
  });

  return (
    <TemplateContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
