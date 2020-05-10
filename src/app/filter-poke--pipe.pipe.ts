import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({ name : 'filterPokemonPipe', pure : false })
export class FilterPokemonPipePipe implements PipeTransform {
    transform(value : any[], property ?: string, searchString ?: string) : any {
        if(value !== undefined) {
            return value.filter((e) => { return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1; });
        } else {
            return [];
        }
    }
}
