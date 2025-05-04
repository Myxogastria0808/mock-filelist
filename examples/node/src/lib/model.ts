export type OkResponse = {
  status: 'ok';
  code: string;
  message: string;
};

export type ErrorResponse = {
  status: 'error';
  code: string;
  message: string;
};
