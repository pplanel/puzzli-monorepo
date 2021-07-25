export const BreakpointSizeTokens = {
  XS_MOBILE: 'xs-mobile',
  SM_MOBILE: 'sm-mobile',
  MD_TABLET: 'md-tablet',
  LG_TABLET: 'lg-tablet',
  SM_DESKTOP: 'sm-desktop',
  MD_DESKTOP: 'md-desktop',
  LG_DESKTOP: 'lg-desktop',
  XXL_DESKTOP: 'xxl-desktop'
} as const;

export const BreakpointSizes = {
  'xs-mobile': '360px',
  'sm-mobile': '480px',
  'md-tablet': '768px',
  'lg-tablet': '992px',
  'sm-desktop': '1366px',
  'md-desktop': '1536px',
  'lg-desktop': '1920px',
  'xxl-desktop': '2560px'
} as const;

export type BreakpointSizeToken = typeof BreakpointSizeTokens[keyof typeof BreakpointSizeTokens];

export const defaultViewports = Object.values(BreakpointSizeTokens).reduce((acc, bsKey: BreakpointSizeToken) => {
  const bsWidth = BreakpointSizes[bsKey];

  const viewport = {
    name: bsKey,
    styles: { width: bsWidth, height: '100%' }
  };

  return { ...acc, [bsKey]: viewport };
}, {});
