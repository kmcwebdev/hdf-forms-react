import { makeRequest } from '../http.service';

export class MemberAPI {
  static async createVisit(data: any) {
    const createVisit = await makeRequest({
      url: '/api/visitors/members',
      method: 'POST',
      data,
    });

    return createVisit.data;
  }
}
