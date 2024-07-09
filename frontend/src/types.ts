export type Asset = {
  img_url: string;
  symbol: string;
  name: string;
  price: number;
  "24h_change": string;
  "1h_funding": number;
  long_open_interest: number;
  short_open_interest: number;
};

export type Reaction = {
  userId: string;
  emoji: string;
};

export type ReactionBody = Reaction & {
  timestamp: string;
};

export type Reactions = Record<string, Reaction[]>;
