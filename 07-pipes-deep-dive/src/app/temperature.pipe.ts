import { input, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})
export class TemperaturePipe implements PipeTransform {
    // This function must be implemented in a custom pipe
    transform(
        value: string | number | null, // value: the value the pipe will transform 
        inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah' // additional parameters
    ){ 

        if(!value) {
            return value;
        }

        let val: number;

        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }

        let outputTemp: number;

        if (inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (5 / 9);
        } else {
            outputTemp = val;    
        }

        let symbol: '°C' | '°F';

        if (!outputType) {
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else {
            symbol = outputType === 'cel' ? '°C' : '°F';
        }

        return `${outputTemp.toFixed(2)} ${symbol}`;
    }
}