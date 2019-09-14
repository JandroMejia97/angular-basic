import { WorkStatuses } from './work-statuses.enum';

export interface Contact {
  id: number;
  name: string;
  isVip: boolean;
  gender: string;
  workStatus: WorkStatuses;
  company: string;
  education: string;
}
