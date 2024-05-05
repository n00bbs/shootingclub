export interface RequestPayload {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
}

export interface ResponsePayload {
  roles: string[];
}
