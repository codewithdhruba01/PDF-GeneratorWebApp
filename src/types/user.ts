export interface UserData {
  name: string;
  email: string;
  phoneNumber: string;
  position: string;
  description: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  position?: string;
  description?: string;
}