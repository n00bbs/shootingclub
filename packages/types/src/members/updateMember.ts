import { getOne } from '.';

export interface RequestPayload {
  email?: string;
  first_name?: string;
  last_name?: string;
  birthdate?: Date;
  street?: string;
  number?: string;
  city?: string;
  postal_code?: string;
}

export interface ResponsePayload extends getOne.ResponsePayload {}
