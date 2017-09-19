import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeImageURL'
})
export class ChangeImageURLPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace('/img', 'http://projects-api.webtraining.zone/events-images');
  }

}
