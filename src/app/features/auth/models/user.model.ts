export interface User {
  firstName: string;
  lastName:  string;
  email:     string;
  password:  string;
  role:      'admin' | 'user' | 'guest';
}