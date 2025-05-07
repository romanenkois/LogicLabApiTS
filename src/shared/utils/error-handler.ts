import { Response } from 'express';

export const errorHandler = (res: Response, error: any) => {
  // if the error is not custom made error, we just ball it
  if (error !instanceof Error) {
    console.error('Error:', error);
    res.status(500).json({ message: `Internal error\n ${error}` });
    return;
  }

  console.error('Error:', error);

  const errorMessage = error instanceof Error ? error.message : error;
  switch (errorMessage) {
    case error instanceof SyntaxError && 'body' in error:
      res.status(400).json({
        message: 'Invalid JSON format',
      });
      break;
    // this one for failed parsing of user inputted data
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
      res.status(500).json({ message: errorMessage})
      break;

    default:
      console.error('Error:', error);
      res.status(500).json({ message: `Internal error\n ${errorMessage}` });
      break;
  }
  return; // to make sure that response is over in all cases
};
