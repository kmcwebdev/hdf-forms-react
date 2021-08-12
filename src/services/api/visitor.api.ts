import { Visitor } from 'src/utilities/interface/visitor.interface';
import { makeRequest } from '../http.service';

export class VisitorAPI {
  static async checkEmail(email: string) {
    const checkEmail = await makeRequest<Visitor>({
      url: '/api/visitors/check-email',
      method: 'POST',
      params: {
        email,
      },
    });

    return checkEmail.data;
  }

  static async currentVisit(visitId: string) {
    const currentVisit = await makeRequest({
      url: '/api/visitors/visits/current',
      params: {
        visitId,
      },
    });

    return currentVisit.data;
  }
}
