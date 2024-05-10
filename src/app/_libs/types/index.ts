export type BrandingContent = {
  content: string;
};

export type BrandingCardProps = {
  title: string;
  content: BrandingContent[];
  img: string;
  reverse?: boolean;
};
