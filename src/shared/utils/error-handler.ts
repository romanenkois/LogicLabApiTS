import { Response } from 'express';

export const errorHandler = (res: Response, error: any) => {
  // if it is not internal type of error, that is documented, then we just other all checks
  if (error !instanceof Error) {
    return;
  }

  const errorMessage = error instanceof Error ? error.message : error;
  switch (errorMessage) {
    case error instanceof SyntaxError && 'body' in error:
      res.status(400).json({
        message: 'Invalid JSON format',
      });
      break;
    // this one for failed parsing of user inputed data
    case 'Failed to parse user data':
      console.log(errorMessage);
      res.status(400).json({ message: errorMessage })
      break;

    // this one indicates that something went wrong internally, rather something is wrong with external input
    case 'Failed to parse data':
      console.log(errorMessage);
      res.status(400).json({ message: errorMessage });
      break;

    case 'Failed to add object':
      console.log(errorMessage);
      res.status(500).json({ messsage: errorMessage})
      break;

    default:
      console.error('Error:', error);
      res.status(500).json({ message: `Internal error\n ${errorMessage}` });
      break;
  }
  return; // to make sure that responce is over in all cases
};
