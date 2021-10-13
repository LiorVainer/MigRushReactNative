import { STATUS_OPTIONS } from "../../models/Status";

interface ColorOptions {
  stauration?: number;
  lightness?: number;
  opacity?: number;
}

export const ThemeColors = {
  grayScale: (lightness: number, opacity?: number) =>
    `hsla(0, 0%, ${lightness}%, ${opacity !== undefined ? opacity : 1})`,

  primary: ({ stauration, lightness, opacity }: ColorOptions = {}) =>
    `hsla(240, ${stauration ? stauration : 71}%, ${lightness !== undefined ? lightness : 39}%, ${
      opacity ? opacity : 1
    })`,

  accent: ({ stauration, lightness, opacity }: ColorOptions = {}) =>
    `hsla(211, ${stauration ? stauration : 96}%, ${lightness !== undefined ? lightness : 72}%, ${
      opacity ? opacity : 1
    })`,

  [STATUS_OPTIONS.ARRIVING]: ({ stauration, lightness, opacity }: ColorOptions = {}) =>
    `hsla(130, ${stauration ? stauration : 80}%, ${lightness ? lightness : 40}%, ${
      opacity ? opacity : 1
    })`,

  [STATUS_OPTIONS.MAYBE]: ({ stauration, lightness, opacity }: ColorOptions = {}) =>
    `hsla(0, ${stauration ? stauration : 90}%, ${lightness ? lightness : 40}%, ${
      opacity ? opacity : 1
    })`,

  [STATUS_OPTIONS.NOT_DECIDED]: ({ stauration, lightness, opacity }: ColorOptions = {}) =>
    `hsla(40, ${stauration ? stauration : 90}%, ${lightness ? lightness : 50}%, ${
      opacity ? opacity : 1
    })`,
};
