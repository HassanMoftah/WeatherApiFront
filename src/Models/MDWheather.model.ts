import { MDMain } from './MDMain.model';
import { MDWheatherInfo } from './MDWheatherInfo.model';
import { MDWind } from './MDWind.model';

export class MDWheather{
    constructor(
        public name?:string,
        public main?:MDMain,
        public wind?:MDWind,
        public weather?:Array<MDWheatherInfo>
    ){
        weather=new Array<MDWheatherInfo>();
    }
}