import { createStitches } from "@stitches/react";

export const { css, theme } = createStitches({
  theme: {
    colors: {
      primary: '#6161c1',
      textPrimary: '#ffffff',
      white: "#ffffff",
      grey800: "#212529",
      grey900: "#0f0d17",
    },
    space: {
      xsm: '4px',
      sm: "6px",
      md: "8px",
      lg: "16px",
    },
    radii: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "16px",
    },
  }
});
