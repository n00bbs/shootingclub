export interface Department {
  id: string;
  name: string;
  joined: boolean;
  color: string;
}

export interface City {
  id: string;
  name: string;
  postal_code: string;
}

export interface UserAddress {
  street_name: string;
  street_number: string;
  city: City;
}

export interface ResponsePayload {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
  address: UserAddress;

  updateHash: string;
  departments: Department[];
  attendances: Date[];
  isAllowedToBuyAmmo: boolean;
  feeInLastYear: number;
}
