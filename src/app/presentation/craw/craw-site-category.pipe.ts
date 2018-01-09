import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name : 'CrawSiteCategoryPipe'
})
export class CrawSiteCategoryPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        switch (value) {
            case 1 :
                return '뽐뿌'
            case 2:
                return '쿨엔조이';
            case 3:
                return '루리웹';
            default :
                return '이건뭐여';
        }
    }

}