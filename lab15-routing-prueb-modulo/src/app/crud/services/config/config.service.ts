import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Config } from './config';

@Injectable()
export class ConfigService {

  public config: Config = new Config();

  constructor() {
    this.config.api = environment.config.api;
    this.config.url = environment.config.url;
  }

}

