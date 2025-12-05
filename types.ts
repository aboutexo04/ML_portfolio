export interface Score {
  value: string;
  rank: boolean;
  decs: boolean;
}

export interface CompetitionResult {
  id: number;
  public_result: {
    RMSE: Score;
  };
  private_result: {
    RMSE: Score;
  };
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  image_url: string;
  email: string;
  nickname: string;
}

export interface Submission {
  id: number;
  competition: number;
  user: User;
  record: CompetitionResult | null; // record can be null if failed
  description: string;
  log: string;
  phase: 'Finished' | 'Failed' | 'Evaluating';
  final: boolean;
  created_at: string;
  updated_at: string;
}
