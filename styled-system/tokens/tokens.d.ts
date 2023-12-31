/* eslint-disable */
export type Token = "colors.red" | "colors.orange" | "colors.yellow" | "colors.green" | "colors.cyan" | "colors.blue" | "colors.purple" | "colors.pink" | "colors.base00" | "colors.base05" | "colors.base10" | "colors.base20" | "colors.base25" | "colors.base30" | "colors.base35" | "colors.base40" | "colors.base50" | "colors.base60" | "colors.base70" | "colors.base100" | "colors.accent" | "colors.accent1" | "colors.accent2" | "colors.highlight" | "fontSizes.smallest" | "fontSizes.smaller" | "fontSizes.small" | "fontSizes.uiSmaller" | "fontSizes.uiSmall" | "fontSizes.uiMedium" | "fontSizes.uiLarge" | "fontSizes.h1" | "fontSizes.h2" | "fontSizes.h3" | "fontSizes.h4" | "fontSizes.h5" | "fontSizes.h6" | "lineHeights.h1" | "lineHeights.h2" | "lineHeights.h3" | "lineHeights.h4" | "lineHeights.h5" | "lineHeights.h6" | "fontWeights.thin" | "fontWeights.extralight" | "fontWeights.light" | "fontWeights.normal" | "fontWeights.medium" | "fontWeights.semibold" | "fontWeights.bold" | "fontWeights.extrabold" | "fontWeights.black" | "fontWeights.h1" | "fontWeights.h2" | "fontWeights.h3" | "fontWeights.h4" | "fontWeights.h5" | "fontWeights.h6" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.colorPalette"

export type ColorPalette = "red" | "orange" | "yellow" | "green" | "cyan" | "blue" | "purple" | "pink" | "base00" | "base05" | "base10" | "base20" | "base25" | "base30" | "base35" | "base40" | "base50" | "base60" | "base70" | "base100" | "accent" | "accent1" | "accent2" | "highlight"

export type ColorToken = "red" | "orange" | "yellow" | "green" | "cyan" | "blue" | "purple" | "pink" | "base00" | "base05" | "base10" | "base20" | "base25" | "base30" | "base35" | "base40" | "base50" | "base60" | "base70" | "base100" | "accent" | "accent1" | "accent2" | "highlight" | "colorPalette"

export type FontSizeToken = "smallest" | "smaller" | "small" | "uiSmaller" | "uiSmall" | "uiMedium" | "uiLarge" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type LineHeightToken = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce" | "slideDown" | "slideUp" | "slideIn"

export type Tokens = {
		colors: ColorToken
		fontSizes: FontSizeToken
		lineHeights: LineHeightToken
		fontWeights: FontWeightToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"