import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'convertToSpaces',
})
export class ConvertToSpacesPipe implements PipeTransform {
	transform(value: string, character: string, replaceChar: string): string {
		return value.replace(character, replaceChar);
	}
}
