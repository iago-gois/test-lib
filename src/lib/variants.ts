export type SizeVariant = "sm" | "md" | "lg";

export const sizeClassMap: Record<SizeVariant, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};
