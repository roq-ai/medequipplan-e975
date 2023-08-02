interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Medical Equipment Planner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Project Owner', 'Medical Equipment Planner'],
  tenantName: 'Organization',
  applicationName: 'MedEquipPlan ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
