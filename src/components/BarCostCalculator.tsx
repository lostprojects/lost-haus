import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const packageRates: Record<string, number> = {
  tier1: 45,
  tier2: 35,
  tier3: 25,
};

const packageLabels: Record<string, string> = {
  tier1: 'Tier 1 ($45 per guest)',
  tier2: 'Tier 2 ($35 per guest)',
  tier3: 'Tier 3 ($25 per guest)',
};

const BarCostCalculator: React.FC<{ className?: string }> = ({ className }) => {
  const [guests, setGuests] = useState(50);
  const [tier, setTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier1');

  const cost = guests * packageRates[tier];

  return (
    <section className={cn('py-12 bg-muted/40', className)}>
      <div className="container mx-auto px-4 max-w-md text-center space-y-4">
        <h2>Estimate Your Bar Cost</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-left text-sm font-medium mb-1" htmlFor="guest-count">Guest Count</label>
            <Input
              id="guest-count"
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium mb-1">Package</label>
            <Select value={tier} onValueChange={(val) => setTier(val as 'tier1' | 'tier2' | 'tier3')}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(packageLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key} className="cursor-pointer">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="text-lg font-semibold">Estimated Cost: ${cost.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};

export default BarCostCalculator;
