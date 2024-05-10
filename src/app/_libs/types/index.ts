export type BrandingContent = {
  content: string;
};

export type AboutCardProps = {
  title: string;
  content: BrandingContent[];
  img: string;
  reverse?: boolean;
};
