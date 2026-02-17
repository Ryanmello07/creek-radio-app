export interface Dissident {
  id: string;
  name: string;
  reason: string;
  notes: string | null;
  date_added: string;
  mostWanted?: boolean;
  minorInfraction?: boolean;
  profileImage?: string;
}

export const dissidents: Dissident[] = [
  {
    id: 'emberyo-001',
    name: 'Emberyo',
    reason: 'Murder of a 10 Star Assault Infantry General',
    notes: 'Threat level: MAXIMUM. Approached during a combat operation and executed high-ranking officer in cold blood. Considered armed and extremely dangerous. Do not engage without full military support.',
    date_added: '2186-11-01T00:00:00.000Z',
    mostWanted: true,
    profileImage: 'nil',
  },
  {
    id: 'atoris-001',
    name: 'Atoris',
    reason: 'Unauthorized execution of a highly wanted dissident: Officer did not complete basic Truth Enforcement training.',
    notes: null,
    date_added: '2186-11-15T00:00:00.000Z',
    minorInfraction: true,
  },
];
