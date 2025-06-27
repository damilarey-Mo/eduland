// src/utils/colors.ts
// Central color definitions for the EduLand theme with dark vanilla aesthetic

// Export a colors object with all our theme colors
export const colors = {
  // Vanilla/Cream shades
  vanilla: {
    50: "#fffdf2",
    100: "#fff9e6",
    200: "#fff4cc",
    300: "#ffe9a3",
    400: "#f8d775",
    500: "#eac054",
    600: "#d9a23d",
    700: "#b7802c",
    800: "#96682a",
    900: "#7a5628",
    950: "#422f14",
  },
  // Mint/Green accent shades
  mint: {
    50: "#eefff6",
    100: "#d5ffec",
    200: "#aefddb",
    300: "#75f5c2",
    400: "#3ee6a3",
    500: "#1bc986",
    600: "#0fa36c",
    700: "#108159",
    800: "#126548",
    900: "#11533d",
    950: "#042f22",
  },
  // Dark shades for background
  dark: {
    50: "#f6f6f7",
    100: "#e2e3e7",
    200: "#c5c7ce",
    300: "#a0a3ae",
    400: "#7c8089",
    500: "#62646d",
    600: "#4c4e56",
    700: "#3e4046",
    800: "#25262c", // Main background
    900: "#1a1b20",
    950: "#121216",
  },
};

// Common color combinations for dark vanilla theme
export const theme = {
  // Main colors
  primary: colors.vanilla[400], // Warm yellow-vanilla
  primaryLight: colors.vanilla[300],
  primaryDark: colors.vanilla[600],
  
  secondary: colors.mint[400], // Mint green
  secondaryLight: colors.mint[300],
  secondaryDark: colors.mint[600],
  
  // Background colors
  background: colors.dark[800], // Dark background
  backgroundLight: colors.dark[700],
  backgroundDark: colors.dark[900],
  
  // Text colors
  text: colors.vanilla[100], // Light cream text
  textSecondary: colors.vanilla[300],
  textMuted: colors.dark[300],
  
  // Helper for creating transparent colors (e.g., for overlays)
  alpha: (color: string, opacity: number): string => {
    // If the color isn't a valid hex color, return it as is
    if (!color || !color.startsWith('#')) {
      return color;
    }
    
    // Ensure opacity is between 0 and 1
    const safeOpacity = Math.max(0, Math.min(1, opacity));
    
    // Convert opacity (0-1) to hex (00-FF)
    const alpha = Math.round(safeOpacity * 255)
      .toString(16)
      .padStart(2, '0');
    
    // For 6-digit hex colors (#RRGGBB), return with alpha (#RRGGBBAA)
    if (color.length === 7) {
      return `${color}${alpha}`;
    }
    
    // For 3-digit hex colors (#RGB), convert to 6-digit format first
    if (color.length === 4) {
      const r = color[1];
      const g = color[2];
      const b = color[3];
      return `#${r}${r}${g}${g}${b}${b}${alpha}`;
    }
    
    // If it's already an 8-digit hex color or not recognized, return as is
    return color;
  }
};

export default theme; 