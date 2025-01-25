import { PromiseOfOptional } from '@codeforge/utils';

export interface Cache<T = string> {
    set(key: string, value: T, expiresIn?: TimeToLive): Promise<void>;
    get(key: string): PromiseOfOptional<T>;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
  }
  

export enum ExpiresInSeconds {
  OneMinute = 60,
  OneHour = 3600,
  OneDay = 86400,
  OneWeek = 604800,
  OneMonth = 2592000,
  OneYear = 31536000,
}

export enum ExpiresInMilliseconds {
  OneMinute = ExpiresInSeconds.OneMinute * 1000,
  OneHour = ExpiresInSeconds.OneHour * 1000,
  OneDay = ExpiresInSeconds.OneDay * 1000,
  OneWeek = ExpiresInSeconds.OneWeek * 1000,
  OneMonth = ExpiresInSeconds.OneMonth * 1000,
  OneYear = ExpiresInSeconds.OneYear * 1000,
}

export interface TimeToLive {
  value: ExpiresInSeconds;
  amount: number;
}
