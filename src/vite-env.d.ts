/// <reference types="vite/client" />

declare module 'jspdf' {
  export default class jsPDF {
    constructor(orientation?: string, unit?: string, format?: string);
    setFont(fontName: string, fontStyle?: string): void;
    setFontSize(size: number): void;
    setTextColor(r: number, g: number, b: number): void;
    setLineWidth(width: number): void;
    setDrawColor(r: number, g: number, b: number): void;
    text(text: string | string[], x: number, y: number): void;
    line(x1: number, y1: number, x2: number, y2: number): void;
    splitTextToSize(text: string, maxWidth: number): string[];
    save(filename: string): void;
  }
}