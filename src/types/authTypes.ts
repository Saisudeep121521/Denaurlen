// types/authTypes.ts
export interface AuthAction {
    type: string;
    payload: {
      username: string;
      error?: string;
      // Add more payload properties as needed
    };
  }
  