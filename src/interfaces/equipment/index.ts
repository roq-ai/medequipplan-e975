import { FeedbackInterface } from 'interfaces/feedback';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface EquipmentInterface {
  id?: string;
  name: string;
  project_id?: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  project?: ProjectInterface;
  _count?: {
    feedback?: number;
  };
}

export interface EquipmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  project_id?: string;
}
