export type PostCardType = {
  content: string;
  created: number;
  children?: React.ReactNode;
};

export type PostType = {
  id: number;
  content: string;
  created: number;
};
