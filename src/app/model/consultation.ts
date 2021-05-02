import { EntityBase } from "./entity-base";
import { StatusConsultation } from "./status-consultation.enum";

export interface Consultation {
  customer: EntityBase;
  animal: EntityBase;
  phones: string;
  date: string;
  status: StatusConsultation;
  note: string;
}
