export type Test = {
  id: string;
  href: string;
  question: {
    type: any;
    object: object;
  }
  solution: {
    looseSolution: string[];
    strictSolution: string[];
  }
}

export type TestDto = {
  id: string;
  href: string;
  question: {

  }
}
