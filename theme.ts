import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#fff",
  "--brand-dark": "#000814",
  "--brand-primary": "#b8b8ff",
  "--brand-primary-alt": "#fb8500",
  "--brand-secondary": "#219ebc",
  "--brand-teriary": "#8ecae6",
  "--brand-danger": "#c1121f",
  "--brand-success": "#06d6a0",
  "--brand-warning": "#ffd500",
};

export const theme = buildLegacyTheme({
  "--black": props["--brand-dark"],
  "--white": props["--white"],

  "--gray": "#636363",
  "--gray-base": "#636363",

  "--brand-primary": props["--brand-primary"],
  "--component-text-color": props["--white"],
  "--component-bg": props["--brand-dark"],

  "--default-button-color": "#636363",
  "--default-button-primary-color": props["--brand-primary"],
  "--default-button-success-color": props["--brand-success"],
  "--default-button-warning-color": props["--brand-warning"],
  "--default-button-danger-color": props["--brand-danger"],

  "--state-info-color": props["--brand-primary"],
  "--state-success-color": props["--brand-success"],
  "--state-warning-color": props["--brand-warning"],
  "--state-danger-color": props["--brand-danger"],

  "--main-navigation-color": props["--brand-dark"],
  "--main-navigation-color--inverted": props["--brand-primary"],

  "--focus-color": props["--brand-primary"],
});
