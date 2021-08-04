import { Question } from 'src/utilities/interface/question.interface';
import { makeRequest } from '../http.service';

export class QuestionAPI {
  static async questions() {
    const questions = await makeRequest<Question[]>({
      url: '/api/questions',
    });

    return questions.data;
  }
}
