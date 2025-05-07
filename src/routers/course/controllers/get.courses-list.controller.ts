import { Request, Response } from 'express';
import { errorHandler } from '@utils';
import { CourseService } from '@services';
import { Course, SelectionOption } from '@types';
import { CourseMapper } from '@mappers';

export const getListOfCourses = async (req: Request, res: Response) => {
  try {
    let selectionOption: SelectionOption = req.query[
      'selection'
    ] as SelectionOption;

    if (!selectionOption || selectionOption.trim() === '') {
      selectionOption = 'all';
    }

    const courses: Course[] | null = await CourseService.getCoursesList(
      selectionOption
    );

    if (!courses) {
      res.status(200).json({ courses: [] });
      return;
    } else {
      res.status(200).json({
        courses: courses.map((course) => CourseMapper.typeToDTO(course)),
      });
      return;
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
