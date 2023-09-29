import { UserInterface } from 'interfaces/user';
import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface ComplaintInterface {
  id?: string;
  description: string;
  status: string;
  user_id: string;
  booking_id: string;
  resolved_at?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  booking?: BookingInterface;
  _count?: {};
}

export interface ComplaintGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  status?: string;
  user_id?: string;
  booking_id?: string;
}
