import { User } from "./user";

export type Listing = {
  id: string;
  name: string;
  description: string;
  price: string;
  images?: string[];
  seller: User;
  buyer?: User;
};
