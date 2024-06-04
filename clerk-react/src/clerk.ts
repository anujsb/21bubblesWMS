import { ClerkProvider } from '@clerk/clerk-react';

const managerFrontendApi = 'YOUR_MANAGER_CLERK_FRONTEND_API';
const resourceFrontendApi = 'YOUR_RESOURCE_CLERK_FRONTEND_API';

export const ClerkManagerProvider = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider frontendApi={managerFrontendApi}>
    {children}
  </ClerkProvider>
);

export const ClerkResourceProvider = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider frontendApi={resourceFrontendApi}>
    {children}
  </ClerkProvider>
);
