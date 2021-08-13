import { ISODateString } from '../types/iso-date.type';
import { Floor } from './floor.interface';
import { LeaveType } from './leave-type.interface';
import { Question } from './question.interface';
import { Site } from './site.interface';
import { Visitor } from './visitor.interface';
import { WorkType } from './work-type.interface';

interface Survey {
  question: Question;
  answers: string[];
}

export interface CurrentVisit {
  guest: boolean;
  visitId: string;
  visitorStatus: {
    isClear: boolean;
    status: string;
  };
  site: Site;
  floor: Floor;
  workType: WorkType | null;
  leaveType: LeaveType | null;
  visitor: Visitor;
  poc: string;
  pocEmail: string;
  purposeOfVisit: string;
  healthTag: {
    tag: string;
  };
  surveys: Survey[];
  travelLocations: string[];
  dateCreated: ISODateString;
  timeCreated: ISODateString;
}
