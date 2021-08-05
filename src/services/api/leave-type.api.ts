import { LeaveType } from 'src/utilities/interface/leave-type.interface';
import { makeRequest } from '../http.service';

export class LeaveTypeAPI {
  static async getLeaveTypes() {
    const leaveTypes = await makeRequest<LeaveType[]>({
      url: '/api/misc/leave-types',
    });

    return leaveTypes.data;
  }
}
