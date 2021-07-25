export async function resolveSvg(hostElement: HTMLAppIconElement, fileUrl: string, selector: string): Promise<void> {
  const svgFile: Response = await fetch(fileUrl);
  const host: Element = hostElement.shadowRoot.querySelector(selector);
  host.innerHTML = await svgFile.text();
}

export const IconResolvers = {
  SVG: resolveSvg
} as const;

export type IconResolverType = keyof typeof IconResolvers | undefined;
