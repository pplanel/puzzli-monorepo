export const FlatVariants = {
  GRAY: "gray",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
} as const;

export const OutlineVariants = {
  OUTLINE_GRAY: "outline-gray",
  OUTLINE_PRIMARY: "outline-primary",
  OUTLINE_SECONDARY: "outline-secondary",
  OUTLINE_SUCCESS: "outline-success",
  OUTLINE_DANGER: "outline-danger",
  OUTLINE_WARNING: "outline-warning",
  OUTLINE_INFO: "outline-info",
} as const;

export const ColorVariants = { ...FlatVariants, ...OutlineVariants } as const;

export type FlatVariant = typeof FlatVariants[keyof typeof FlatVariants];

export type OutlineVariant = typeof OutlineVariants[keyof typeof OutlineVariants];

export type ColorVariant = FlatVariant | OutlineVariant;
