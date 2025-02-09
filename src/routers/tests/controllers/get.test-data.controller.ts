import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { TestsService } from '@services';

export const getTestData = async (req: Request, res: Response) => {
  try {
    const testId = req.params.id;
    if (!testId) {
      res.status(400).json({error: 'test id is required'});
      return;
    }

    const test = await TestsService.getTestData(testId);
    if (!test) {
      res.status(404).json({error: 'test not found'});
      return;
    }

    res.status(200).json({test: test});
    return;
  } catch (error) {
    errorHandler(res, error);
  }
}
