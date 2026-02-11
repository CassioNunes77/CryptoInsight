/**
 * CryptoInsight - Tipos globais
 */

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  priceChange24h: number;
  marketCap: number;
  volume24h: number;
}

export interface Alert {
  id: string;
  assetId: string;
  condition: "above" | "below";
  value: number;
  active: boolean;
}
