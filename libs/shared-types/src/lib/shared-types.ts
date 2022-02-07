export function sharedTypes(): string {
  return 'shared-types';
}

export interface Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: Latlng;
  cuisine_type: string;
  operating_hours: OperatingHours;
  reviews: Review[];
}

export interface Latlng {
  lat: number;
  lng: number;
}

export interface OperatingHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface Review {
  name: string;
  date: string;
  rating: number;
  comments: string;
}
