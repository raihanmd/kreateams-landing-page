export type BrandingContent = {
  content: string;
};

export type AboutCardProps = {
  title: string;
  content: BrandingContent[];
  img: string;
  reverse?: boolean;
};

export type ProgramCardProps = {
  program: TProgram;
  index: number;
};

export type TProgram = {
  title: string;
  content: string;
  img: string;
};
