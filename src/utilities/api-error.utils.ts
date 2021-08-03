import { HttpError } from 'src/services/http.service';

export const ApiError = (error: HttpError) => {
  if (typeof error.response?.data === 'string') {
    return error.response.data;
  }

  if (error.response?.data?.message) {
    if (Array.isArray(error.response.data.message)) {
      return error.response.data.message[0];
    }

    return error.response.data.message;
  }
};
