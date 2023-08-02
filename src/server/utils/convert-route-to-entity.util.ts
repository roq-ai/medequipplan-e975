const mapping: Record<string, string> = {
  equipment: 'equipment',
  feedbacks: 'feedback',
  innovations: 'innovation',
  organizations: 'organization',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
