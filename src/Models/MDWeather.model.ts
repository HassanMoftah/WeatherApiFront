import { MDMain } from './MDMain.model';
import { MDWeatherInfo } from './MDWeatherInfo.model';
import { MDWind } from './MDWind.model';

export class MDWeather {
  constructor(
    public name?: string,
    public main?: MDMain,
    public wind?: MDWind,
    public weather?: Array<MDWeatherInfo>
  ) {
    weather = new Array<MDWeatherInfo>();
  }
}
