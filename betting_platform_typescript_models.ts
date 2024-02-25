// TypeScript Models for Betting Platform

// Interface for handling Bitnodes API data
interface BitnodesApiResponse {
  total_nodes: number;
}

// Interface for handling mempool fee rate data
interface MempoolApiResponse {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
}

// Interface for a bet detail inscription using CBOR
interface BetDetailInscription {
  betCategory: string;
  predictedValue: any; // This can be date, number, etc., based on the betting category
  betAmount: number;
  transactionId?: string; // Optional, to be filled once the bet is inscribed
}

/**
 * TODO:
 * - Define more interfaces as required for additional functionalities.
 * - Implement functions for encoding/decoding CBOR data.
 * - Simulate transaction inscriptions for validation.
 */