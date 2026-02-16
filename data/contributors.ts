export interface Contributor {
  id: string;
  name: string;
  type: 'dj' | 'patreon';
}

export const contributors: Contributor[] = [
  { id: '1', name: 'War Child of The Creek - Our DJ', type: 'dj' },
  { id: '2', name: 'Johnathan', type: 'patreon' },
  { id: '3', name: 'Atoris', type: 'patreon' },
  { id: '4', name: 'Vexsomnia', type: 'patreon' },
  { id: '5', name: 'Thor Van Den Abeele', type: 'patreon' },
  { id: '6', name: 'Kemosabe94g', type: 'patreon' },
  { id: '7', name: 'Sauce', type: 'patreon' },
  { id: '8', name: 'Markel Martin', type: 'patreon' },
  { id: '9', name: 'ImYeti', type: 'patreon' },
];
