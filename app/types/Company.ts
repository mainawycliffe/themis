export type CompanyEmployeeEstimateCount = '1' | '2-5' | '6-10' | '11-50' | '51-100' | 'over-100';

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
  companyEmployeesCount: CompanyEmployeeEstimateCount;

  /**
   *
   * Whether the company offices are located in the same place as the Job i.e.
   * companies can hire from different locations without having offices.
   *
   */
  status: 'local' | 'abroad';

  /**
   *
   * If company isn't local, the number of employees in the company
   *
   */
  localEmployeesCount: CompanyEmployeeEstimateCount;

  /**
   *
   * If not local company, where are the offices located
   *
   */
  country: string;
};

export default Company;
