import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosAdapter {
  public getAxiosInstance(url: any): AxiosInstance {
    return axios.create({
      baseURL: url,
    });
  }
}
