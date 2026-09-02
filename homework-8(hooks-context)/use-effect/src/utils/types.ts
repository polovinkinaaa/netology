export type UserType = {
  id: number;
  name: string;
};

export type DetailType = {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};
