import axios from "axios";

export const defaultAxiosAnswer = {
  statusText: "",
  config: {},
  options: {},
  headers: {},
};

export const mockedAxios = axios as jest.Mocked<typeof axios>;
