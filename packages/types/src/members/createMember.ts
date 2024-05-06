import { getAll } from '.';

export interface RequestPayload {
  email: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
}

export interface ResponsePayload extends getAll.ResponsePayload {
  newMemberId: string;
}
