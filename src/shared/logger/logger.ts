import { loggingConfig } from "@config";

export class Logger {
  /**
   * Log a request
   * @param request - The request
   * @param request.method - The request method
   * @param request.url - The request URL
   * @param request.headers - The request headers as a dictionary
   * @param request.body - The request body as a string
   * @returns void
   */
  public static logRequest(request: {
    method: string;
    url: string;
    headers?: Record<string, string>;
    body?: string;
  }) {
    if (loggingConfig.console.onRequset) {
      console.log(`Request: ${request.method} ${request.url}`);
    }
  }

  /**
   * Log an error
   * @param error - The error
   * @returns void
   */
  public static logError(error: Error) {
    if (2 > 1) {
      console.error('Error:', error);
    }
  }
}
