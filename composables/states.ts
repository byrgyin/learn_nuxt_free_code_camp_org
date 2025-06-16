export const useCounter = (counter: string)=> useState<number>('counter',()=>0);
export const useColor = (color:string)=> useState<string>('color',()=>'pink');