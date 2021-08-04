import { makeRequest } from '../http.service';

export class GuestAPI {
  static async createVisit(data: any) {
    const createVisit = await makeRequest({
      url: '/api/visitors/guests',
      method: 'POST',
      data,
    });

    return createVisit.data;
  }
}
