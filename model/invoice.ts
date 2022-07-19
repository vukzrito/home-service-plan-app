import { Subscription } from "./subscription";

export interface Invoice {
  id: string;
  date: string;
  subscriptionId: string;
  subscription: Subscription;
}
