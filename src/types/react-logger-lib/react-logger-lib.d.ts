declare module "react-logger-lib" {
  export const Logger: LoggerAction;  
  export type LoggerAction = {
    of(name: string): {
      info(...arg0:any[]):void; error(...arg0:any[]):void; warn(...arg0:any[]):void; trace(...arg0:any[]):void;
    }
  };
}
