
export class CustomValidator {

  // Validates numbers
  static numberValidator(number): any {
    if (number.pristine) {
      return null;
    }
    // const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    const NUMBER_REGEXP = /^\d+(\.\d{1,2})?$/;
    number.markAsTouched();
    if (NUMBER_REGEXP.test(number.value)) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }




  // Validates numbers
  static numberValidator_nonzero(number): any {
    //1341.23 sample
    var result = CustomValidator.numberValidator(number);
    if(!result){
      return result;
    }
    
    if(number ===0 ){
      return null;
    }
    
    return {
      invalidNumber: true
    };
  }


}
