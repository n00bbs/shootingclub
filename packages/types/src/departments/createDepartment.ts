import { getAll } from '.';

export interface RequestPayload {
  name: string;
  fee: number;
  color: string;
}

export interface ResponsePayload extends getAll.ResponsePayload {}
