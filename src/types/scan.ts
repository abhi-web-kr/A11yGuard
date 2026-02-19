// Ek single error ki details
export interface ScanIssue {
  id: string;
  category: string;
  name: string;
  description: string;
  severity: "High" | "Medium" | "Low";
  affectedElements: string[];
  remediation: string;
}

// Backend se aane wala pura object
export interface ScanResult {
  url: string;
  scannedAt: string;
  totalIssues: number;
  issuesBySeverity: {
    high: number;
    medium: number;
    low: number;
  };
  issues: ScanIssue[];
}

// Backend se ane wala user details
export interface ScanUser {
  _id?: string;
  name: string;
  createdAt: Date;
  email: string,
  image: string;
}