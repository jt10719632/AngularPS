import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

// implements PipeTransform. Make sure to use all methods within PipeTransform in the class.
// In this case we PipeTransform only has one method
export class ConvertToSpacesPipe implements PipeTransform{    
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    };
};