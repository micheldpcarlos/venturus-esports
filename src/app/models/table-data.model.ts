import { Address } from "./user.model";
import { Week } from "./custom-info.model";

export interface TableData {
  userId: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  rideInGroup: string;
  dayOfTheWeek: Week;
  posts: number;
  albums: number;
  photos: number;
}