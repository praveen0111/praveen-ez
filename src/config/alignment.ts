// Alignment configuration - Edit spacing, margins, and layout here
// Desktop and mobile configurations separated for easy adjustments

export const desktopAlignment = {
  hero: {
    height: "100vh",
    padding: "0",
  },
  character: {
    creative: {
      bottom: "12%",
      left: "25%",
      maxWidth: "260px",
    },
    digital: {
      bottom: "12%",
      right: "25%",
      maxWidth: "260px",
    },
  },
  floatingIcons: {
    iconSize: "20px",
    creative: [
      { top: "18%", left: "8%" },
      { top: "28%", left: "38%" },
      { bottom: "35%", left: "6%" },
    ],
    digital: [
      { top: "18%", right: "8%" },
      { top: "28%", right: "38%" },
      { bottom: "35%", right: "6%" },
    ],
  },
  slider: {
    width: "2px",
    handleSize: "56px",
  },
  section: {
    maxWidth: "1100px",
    paddingX: "2rem",
    paddingY: "5rem",
    gap: "3rem",
  },
  projectGrid: {
    columns: 3,
    gap: "1.5rem",
  },
  skillsList: {
    columns: 4,
    gap: "0.75rem",
  },
  nav: {
    height: "72px",
    paddingX: "2rem",
  },
};

export const mobileAlignment = {
  hero: {
    height: "100vh",
    padding: "0",
  },
  character: {
    creative: {
      bottom: "18%",
      left: "50%",
      maxWidth: "180px",
    },
    digital: {
      bottom: "18%",
      left: "50%",
      maxWidth: "180px",
    },
  },
  floatingIcons: {
    iconSize: "16px",
    creative: [
      { top: "15%", left: "8%" },
      { top: "20%", right: "8%" },
    ],
    digital: [
      { top: "15%", left: "8%" },
      { top: "20%", right: "8%" },
    ],
  },
  slider: {
    height: "2px",
    handleSize: "48px",
  },
  section: {
    maxWidth: "100%",
    paddingX: "1rem",
    paddingY: "3rem",
    gap: "2rem",
  },
  projectGrid: {
    columns: 1,
    gap: "1rem",
  },
  skillsList: {
    columns: 2,
    gap: "0.5rem",
  },
  nav: {
    height: "60px",
    paddingX: "1rem",
  },
  hamburgerMenu: {
    iconSize: "24px",
  },
};
