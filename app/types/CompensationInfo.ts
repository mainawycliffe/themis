import type Company from './Company';
import type Job from './Job';

export type CompensationInfoEquityValue = {
  type: 'value';
  vestingPeriod: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  value: {
    amount: number;
    currency: string;
  };
  details?: string;
};

export type CompensationInfoEquityUnits = {
  type: 'units';
  vestingPeriod: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  quantity: number;
  units: 'units' | 'percent';
  details?: string;
};

export type AmountSpecs = {
  amount: number;
  currency: string;
  period: 'year' | 'month' | 'day' | 'hour';
};

/**
 *
 * Compensation about different Jobs
 *
 */
export type CompensationInfo = {
  /**
   *
   * Whether we should hide details that may identify the user.
   *
   */
  anonymizeInfo: boolean;

  /**
   *
   * The details about the company in question
   *
   */
  company: Company;

  /**
   *
   * Details about the Job
   *
   */
  job: Job;

  /**
   *
   * When this compensation was valid for
   *
   */
  yearOfferValid: number;

  /**
   *
   * The type of contract offered
   *
   */
  contractType: 'fullTime' | 'partTime' | 'internship' | 'temporary' | 'contract/freelance';

  /**
   *
   * Salary and other compensation info about the company
   *
   */
  compensation: {
    /**
     *
     * Salary before tax
     *
     */
    salary: AmountSpecs;

    /**
     *
     * Bonus information about the company
     *
     */
    bonus: AmountSpecs;

    /**
     *
     * Whether the company offers relocation and how much they offer for it
     *
     */
    relocationPackage: Omit<AmountSpecs, 'period'>;

    /**
     *
     * Sign on bonus when you join the company
     *
     */
    signOnBonus: Omit<AmountSpecs, 'period'>;

    /**
     * Other compensation info such as
     */
    otherCompensation: {
      /**
       * The name of the compensation
       */
      name: string;
      amount: number;
      currency: string;
    }[];

    /**
     *
     * Whether the company offers equity
     *
     */
    equityOffered:
      | 'None'
      | 'RSU (Restricted Stock Units)'
      | 'Phantom/Virtual Shares'
      | 'ESOP (Equity Share Option)'
      | 'SAR (Share Appreciation Rights)'
      | 'Growth/shares options'
      | 'Other (Please add in the comment)';

    /**
     *
     * The equity compensation info
     *
     */
    equity: CompensationInfoEquityValue | CompensationInfoEquityUnits;

    /**
     *
     * Other details the compensation structure, e.g. typical bonus targets, and
     * other information others might find helpful.
     *
     */
    details: string;
  };

  /**
   * The benefits the company offers to employees.
   */
  benefits: {
    /**
     *
     * The number of days of paid vacation per year.
     *
     */
    paidDaysOff: boolean;

    /**
     *
     * Do you work from home/remotely or do you work from office?
     *
     */
    workFlexibility: 'inOffice' | 'workFromHome' | 'hybrid';

    /**
     * Other benefits the company offers to employees.
     */
    otherBenefits: string[];
  };

  /**
   *
   * Personal Information for moderation purpose
   *
   */
  personInformation: {
    /**
     *
     * How many years of experience do you have?
     *
     */
    yearsOfExperience: number;

    /**
     *
     * How many years have you worked in the company?
     *
     */
    yearsAtCurrentCompany: number;

    /**
     *
     * How many hours per week do you work?
     *
     */
    weeklyWorkHours: number;

    /**
     *
     * How long is your notice period when you want to quit?
     *
     */
    noticePeriod: {
      type: 'weeks' | 'months';
      value: number;
    };

    /**
     *
     * Whether there is a non-compete clause in your contract that forbids you
     * working for a competitor for a certain period of time. Having a
     * non-compete clause with no compensation is unfair - and often unlawful -
     * for non-executive employees.
     *
     */
    nonCompeteClause: 'yes' | 'no' | 'notSure' | 'paid' | 'notPaid';
  };
};

export default CompensationInfo;
