import { EquipmentInterface } from 'interfaces/equipment';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  equipment?: EquipmentInterface[];
  organization?: OrganizationInterface;
  _count?: {
    equipment?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  organization_id?: string;
}
