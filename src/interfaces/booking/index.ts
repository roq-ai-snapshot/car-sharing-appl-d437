import { ComplaintInterface } from 'interfaces/complaint';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_time: any;
  end_time: any;
  user_id: string;
  car_id: string;
  pickup_location: string;
  dropoff_location: string;
  created_at?: any;
  updated_at?: any;
  complaint?: ComplaintInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  car?: CarInterface;
  _count?: {
    complaint?: number;
    review?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  pickup_location?: string;
  dropoff_location?: string;
}
