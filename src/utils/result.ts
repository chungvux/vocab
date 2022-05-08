interface Result {
  success: boolean;
  message: string;
}

export class SuccessfulResult<T> implements Result {
  success: boolean;
  message: string;
  data: T | T[];
  constructor(success: boolean, message: string, data: T | T[]) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export class ErrorResult<T> implements Result {
  success: boolean;
  message: string;
  data: T | T[];
  constructor(success: boolean, message: string, data: T | T[]) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
