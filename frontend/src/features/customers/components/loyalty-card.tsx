import React from 'react';
import type { LoyaltyCard as LoyaltyCardType } from '../types/customer';
import {
  getLoyaltyTier,
  calculateLoyaltyTierColor,
} from '../utils/customer-helpers';

interface LoyaltyCardProps {
  card: LoyaltyCardType;
}

export const LoyaltyCard: React.FC<LoyaltyCardProps> = ({ card }) => {
  const tier = getLoyaltyTier(card.loyalty_points);
  const tierColor = calculateLoyaltyTierColor(card.tier);

  return (
    <div
      className="rounded-lg p-6 text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${tierColor} 0%, ${tierColor}dd 100%)`,
      }}
    >
      <div className="absolute top-4 right-4 text-sm font-semibold opacity-75">
        {tier.toUpperCase()}
      </div>

      <div className="mb-4">
        <p className="text-sm opacity-75">Loyalty Points Balance</p>
        <p className="text-3xl font-bold">{card.points_balance}</p>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Tier Progress</span>
          <span>{Math.floor((card.loyalty_points % 5000) / 50)}%</span>
        </div>
        <div className="w-full bg-white bg-opacity-25 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full"
            style={{
              width: `${Math.floor((card.loyalty_points % 5000) / 50)}%`,
            }}
          ></div>
        </div>
      </div>

      {card.last_reward_date && (
        <p className="text-xs opacity-75">
          Last reward: {new Date(card.last_reward_date).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};
