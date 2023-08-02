import { UserInterface } from 'interfaces/user';
import { EquipmentInterface } from 'interfaces/equipment';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  user_id?: string;
  equipment_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  equipment?: EquipmentInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  equipment_id?: string;
}
