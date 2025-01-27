"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
class CourseService {
    static getCoursesList() {
        return __awaiter(this, void 0, void 0, function* () {
            let courses = [];
            // TODO: rewrite
            courses = [
                {
                    id: '1',
                    href: 'javascript',
                    name: 'Курс по JavaScript',
                    programingLanguage: 'javascript',
                },
            ];
            return courses;
        });
    }
    static getCourse(courseName) {
        return __awaiter(this, void 0, void 0, function* () {
            let course = null;
            // TODO: rewrite
            switch (courseName) {
                case 'javascript':
                    course = {
                        id: '1',
                        href: 'javascript',
                        name: 'JavaScript',
                        title: 'Курс для початківців по JavaScript',
                        programingLanguage: 'JavaScript',
                        description: "Цей курс охоплює основи програмування на JavaScript, включаючи синтаксис, функції, об'єкти та багато іншого. Ідеально підходить для початківців, які хочуть розпочати свою кар'єру в розробці програмного забезпечення.",
                        lessons: [],
                    };
                    break;
                default:
                    console.warn(`Course ${courseName} not found`);
                    break;
            }
            return course;
        });
    }
    static getLesson(courseName, lessonName) {
        return __awaiter(this, void 0, void 0, function* () {
            let lesson = null;
            // TODO: rewrite
            switch (courseName) {
                case 'javascript':
                    switch (lessonName) {
                        case 'javascript-intro':
                            lesson = {
                                id: '1',
                                href: 'javascript-intro',
                                courseHref: 'javascript',
                                name: 'Вступ до JavaScript',
                                title: 'Вступ до JavaScript',
                                description: 'В цьому уроці ви дізнаєтеся, що таке JavaScript, як він працює та як його використовувати для створення веб-сайтів.',
                                content: [
                                    {
                                        type: 'plain-text',
                                        object: {
                                            text: 'JavaScript (JS) — це мова програмування, яка виконується прямо в браузері. Вона дозволяє створювати інтерактивні елементи на вебсторінках і працювати з даними у реальному часі.',
                                        },
                                    },
                                    {
                                        type: 'plain-text',
                                        object: {
                                            text: 'JavaScript виконується у спеціальному середовищі, яке називається JavaScript Engine. У кожному браузері є свій двигун (наприклад, V8 у Google Chrome).',
                                        },
                                    },
                                    {
                                        type: 'list',
                                        object: {
                                            title: 'Основні сценарії використання',
                                            items: [
                                                'Додавання інтерактивності (наприклад, спливаючі вікна, валідація форм).',
                                                'Створення динамічного (завантаження нових частин сторінки без перезавантаження).',
                                                'Підключення до серверів та отримання даних (наприклад, через API).',
                                            ],
                                        },
                                    },
                                    {
                                        type: 'code-sample',
                                        object: {
                                            code: "console.log('Hello, world!');",
                                            programmingLanguage: 'javascript',
                                        },
                                    },
                                ],
                            };
                            break;
                        case 'javascript-comments':
                            lesson = {
                                id: '2',
                                href: 'javascript-comments',
                                courseHref: 'javascript',
                                name: 'Коментарі в JavaScript',
                                title: 'Коментарі в JavaScript',
                                description: 'Коментарі в JavaScript використовуються для пояснення коду і зроблення його більш зрозумілим для інших розробників.',
                                content: [
                                    {
                                        type: 'plain-text',
                                        object: {
                                            text: 'Коментарі в JavaScript використовуються для пояснення коду і зроблення його більш зрозумілим для інших розробників.',
                                        }
                                    },
                                    {
                                        type: 'plain-text',
                                        object: {
                                            text: 'Є два типи коментарів в JavaScript: однорядкові та багаторядкові.',
                                        }
                                    },
                                    {
                                        type: 'code-sample',
                                        object: {
                                            code: '// Це однорядковий коментар',
                                            programmingLanguage: 'javascript',
                                        },
                                    },
                                    {
                                        type: 'code-sample',
                                        object: {
                                            code: '/* Це \nбагаторядковий \nкоментар*/',
                                            programmingLanguage: 'javascript',
                                        }
                                    },
                                ],
                            };
                        default:
                            console.warn(`Lesson ${lessonName} not found`);
                            break;
                    }
                    break;
                default:
                    console.warn(`Course ${courseName} not found`);
                    break;
            }
            return lesson;
        });
    }
}
exports.CourseService = CourseService;
