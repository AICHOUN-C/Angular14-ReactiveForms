export interface User {
  name: string;
  eMail: string;
  password: string;
  adress: {
    street: string;
    zipCode: number;
    city: string;
  }
}
