
export interface Option {
  value: string;
  viewValue: string;
}


export class ComboBoxes {

  public getOptaions(): Option[] {
    return [
      { value: 'Yes', viewValue: 'Yes' },
      { value: 'No', viewValue: 'No' },
    ];
  }

  public getFeeActiveOptions(): Option[] {
    return [
      { value: 'true', viewValue: 'Active' },
      { value: 'false', viewValue: 'In-active' },
    ];
  }

  public getGenders(): Option[] {
    return [
      { value: 'MALE', viewValue: 'Male' },
      { value: 'FEMALE', viewValue: 'Female' },
    ];
  }

  public getAdmissionStatuses(): Option[] {
    return [
      { value: 'PENDING_FOR_APPROVAL', viewValue: 'Pending for approval' },
      { value: 'APPROVED', viewValue: 'Approved' },
      { value: 'SUSPENDED', viewValue: 'Suspended' },
      { value: 'TERMINATED', viewValue: 'Terminated' },
    ];
  }

  public getAdmissionStatuses_noTerminate(): Option[] {
    return [
      { value: 'PENDING_FOR_APPROVAL', viewValue: 'Pending for approval' },
      { value: 'APPROVED', viewValue: 'Approved' },
      { value: 'SUSPENDED', viewValue: 'Suspended' },
    ];
  }

  public getRejectReasons(): Option[] {
    return [
      { value: 'CLASS_UPGRADE', viewValue: 'Class Upgrade' },
      { value: 'BAD_BEHAVIOUR', viewValue: 'Bad Behaviour' },
      { value: 'ON_PARENTS_REQUEST', viewValue: 'Parents Request' },
      { value: 'OTHERS', viewValue: 'Other' },
    ];
  }

  public getFineStatus(): Option[] {
    return [
      { value: 'ACTIVE', viewValue: 'Active' },
      { value: 'PAID', viewValue: 'Paid' },
      { value: 'CANCELLED', viewValue: 'Cancelled' },
    ];
  }
}

