import { ConsumableType } from "./consumable-type";
import { Property } from "./property";

export class Consumable {
    id: string;
    propertyId: string;
    property: Property;
    name: string;
    consumableTypeId: string;
    consumableType: ConsumableType;
    quantity: number;
    imageUrl: string;
}