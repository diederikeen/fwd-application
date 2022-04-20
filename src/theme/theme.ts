import { createStitches } from "@stitches/react";

export const { css, theme, styled } = createStitches({
  theme: {
    colors: {
      primary: "#6161c1",
      textPrimary: "#212529",
      white: "#ffffff",
      grey100: "#ced4da",
      grey800: "#212529",
      grey900: "#0f0d17",
    },
    space: {
      xsm: '4px',
      sm: "6px",
      md: "8px",
      lg: "16px",
      xlg: '32px',
    },
    radii: {
      xs: "3px",
      sm: "4px",
      md: "8px",
      lg: "16px",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});
