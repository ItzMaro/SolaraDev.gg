
interface Fix {
  description: string;
  issue?: number;
}

export interface ReleaseNote {
  version: string;
  date: string;
  extra?: string;
  fixes?: Fix[];
  features?: string[];
  breakingChanges?: string[];
};