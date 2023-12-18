import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  private getResource(resource: string) {
    const controller = new AbortController();
    const request = apiClient.get(resource, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  }

  getOne<T>(id: number) {
    return this.getResource(this.endpoint + "/" + id);
  }

  getAll<T>() {
    return this.getResource(this.endpoint);
  }
}

function create(endpoint: string) {
  return new HttpService(endpoint);
}

export default create;
