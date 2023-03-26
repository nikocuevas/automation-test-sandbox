/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type MyHelper = import('./custom_helpers/myhelper_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, MyHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<MyHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
