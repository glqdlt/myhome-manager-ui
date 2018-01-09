import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'ReadStatusPipe'
})
export class ReadStatusPipe implements PipeTransform {

    transform(value: number) : any {
        switch (value) {
            case 1 :
                return '읽는 중';
            case 2:
                return '읽음';
            default :
                return '안 읽음';
        }
        
    }
}