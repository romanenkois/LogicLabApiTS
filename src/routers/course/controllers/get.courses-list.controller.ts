import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Course, SelectionOption } from '@types';

export const getListOfCourses = async (req: Request, res: Response) => {
  try {
    let selectionOption: SelectionOption = req.query['selection'] as SelectionOption;

    if (!selectionOption || selectionOption.trim() === '') {
      selectionOption = 'all';
    }

    const courses: Course[] = await CourseService.getCoursesList(selectionOption);
    res.status(200).json({courses: courses});
    return;
  } catch (error) {
    errorHandler(res, error);
  }
};
