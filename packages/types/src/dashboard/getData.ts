export interface Member {
  firstName: string;
  lastName: string;
  enoughAttendancesForAmmo: boolean;
}
export interface ResponsePayload {
  data: Member;
}
