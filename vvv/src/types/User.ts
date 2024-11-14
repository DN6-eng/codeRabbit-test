// src/types/User.ts
export interface User {
  id: number;
  name: string;
  isAdmin: boolean | string; // Mistake 6: Mixing boolean and string types ❌
}
