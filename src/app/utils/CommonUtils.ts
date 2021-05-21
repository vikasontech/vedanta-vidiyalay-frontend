
export class StringUtils {
  static convertToString(num: number): string {
    return (num) ? num + '' : '';
  }

  static convertNullToBlank(val: string): string {
    return (val || val === 'null') ? val : '';
  }

}