import { User } from "./user";

export class Property {
  id: string;
  floorArea: number;
  floorLevel: number;
  estate: string;
  city: string;
  suburb: string;
  province: string;
  areaCode: string;
  name: string;
  ownerId: string;
  owner: User;
  tenantId: string;
  unitNumber: string;
  numberOfRooms: number;
  reference: string;

}
