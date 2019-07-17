export interface CustomInfo {
  userId: number;
  rideInGroup: string;
  dayOfTheWeek: Week;
}

export interface Week {
  sun: boolean;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
}