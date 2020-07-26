import {Logger} from 'react-logger-lib';
import {LOGGER_PACKAGE} from './configuration';

export default function useLogger(scopeName: string) {
  const log = Logger.of(`${LOGGER_PACKAGE.root}.${scopeName}`);
  return log;
}


