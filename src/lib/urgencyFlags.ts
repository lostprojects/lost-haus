// Utility to generate dynamic urgency flags that stay relevant year-to-year.
// Usage: import { getUrgencyFlags, getRandomUrgencyFlag } from "@/lib/urgencyFlags";

export type UrgencyFlag = string;

/**
 * Returns an array of 10 short, dynamic urgency flags.
 * The copy updates automatically based on the current date so it never feels stale.
 */
export function getUrgencyFlags(): UrgencyFlag[] {
  const now = new Date();
  const year = now.getFullYear();
  const nextYear = year + 1;
  const month = now.getMonth(); // 0–11

  // Helper: calculate remaining prime weekends (~22% of total remaining weekends)
  const weeksLeft = Math.ceil(((new Date(year, 11, 31).getTime() - now.getTime()) / 1000 / 60 / 60 / 24) / 7);
  const weekendsLeft = Math.max(1, Math.ceil(weeksLeft * 2 * 0.22));

  // Helper: next popular booking season (spring or fall)
  const nextSeason = month < 5 ? 'Spring' : month < 8 ? 'Fall' : 'Holiday';

  return [
    `Limited dates available for ${year} and ${nextYear}`,
    `${weekendsLeft} prime weekend dates left in ${year}`,
    `Now booking ${nextSeason} ${nextYear} events`,
    `Last chance to secure ${year} pricing`,
    `Peak ${nextSeason.toLowerCase()} slots filling fast`,
    `${nextYear} calendar already booking up fast`,
    `Only a few Friday evenings left this ${nextSeason.toLowerCase()}`,
    `Demand surging—reserve before rates rise`,
    `Popular dates vanish quickly—act now`
  ];
}

/**
 * Returns one random urgency flag from the current list.
 */
export function getRandomUrgencyFlag(): UrgencyFlag {
  const flags = getUrgencyFlags();
  return flags[Math.floor(Math.random() * flags.length)];
} 