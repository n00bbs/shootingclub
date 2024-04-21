export interface RequestPayload {
  departmentId: string;
  type: 'join' | 'leave';
}

export interface ResponsePayload {
  success: boolean;
}
