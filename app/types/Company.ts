type Company = {
  name: string;
  industry: string;
  /**
   *
   * An estimate of total number of employees in the company globally
   *
   * Gives an estimate of the size of the company
   *
   */
  companyEmployeesCount: '1' | 'under-5' | 'under-10' | 'under-50' | 'under-100' | 'over-100';

  /**
   *
   * Whether the company offices are located in the same place as the Job i.e.
   * companies can hire from different locations without having offices.
   *
   */
  isLocalCompany: boolean;

  /**
   *
   * If company isn't local, the number of employees in the company
   *
   */
  localEmployeesCount: '1' | 'under-5' | 'under-10' | 'under-50' | 'under-100' | 'over-100';

  /**
   *
   * If not local company, where are the offices located
   *
   */
  country: string;
};

export default Company;
