export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  postedAt: string;
  platform: 'LinkedIn' | 'Upwork' | 'WeWorkRemotely' | 'SEOJobs' | 'Indeed' | 'RemoteOK';
  tags: string[];
  description: string;
  link: string;
}

export interface TrendData {
  name: string;
  value: number;
}
