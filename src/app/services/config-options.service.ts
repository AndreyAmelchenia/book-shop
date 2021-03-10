import { Injectable } from '@angular/core';

interface Config {
  id: string;
  login: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private config: Config;

  setConfig(config) {
    this.config = config;
  }

  getConfig() {
    return this.config;
  }

  setIdConfig(id: string) {
    this.config = { ...this.config, id };
  }

  setLoginConfig(login: string) {
    this.config = { ...this.config, login };
  }
}
