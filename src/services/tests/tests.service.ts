import { MongoDB } from "@database";
import { Test } from "@types";

export class TestsService {
  public static async getTestData(testId: string): Promise<Test | null> {
    let test: Test | null = null;
    const db = await MongoDB.getDB();

    
    return test;
  }

  public static async checkTest(testId: string, answers: string[]): Promise<boolean> {
    let isRight = false;
    const db = await MongoDB.getDB();

    return isRight;
  }

  public static async checkQuestion(testId: string): Promise<boolean> {
    let isRight = false;
    const db = await MongoDB.getDB();

    return isRight;
  }
}
