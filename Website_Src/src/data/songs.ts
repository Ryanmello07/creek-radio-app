export interface Track {
  id: string;
  title: string;
  artist: string;
}

export interface Song {
  id: string;
  title: string;
  mixcloudEmbed: string;
  tracks: Track[];
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Creek Radio Season 1',
    mixcloudEmbed: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJWarChildOfTheCreek%2Fcreek-radio-classics-season-1%2F',
    tracks: [
      { id: 't1', title: 'Paranoid', artist: 'Black Sabbath' },
      { id: 't2', title: 'Barracuda', artist: 'Heart' },
      { id: 't3', title: 'Mississippi Queen', artist: 'Mountain' },
      { id: 't4', title: 'Immigration Song', artist: 'Led Zeppelin' },
      { id: 't5', title: 'Highway Tune', artist: 'Greta Van Fleet' },
      { id: 't6', title: 'Fortunate Son', artist: 'Creedence Clearwater Revival' },
      { id: 't7', title: 'Paint It, Black', artist: 'The Rolling Stones' },
      { id: 't8', title: 'Gimme Shelter', artist: 'The Rolling Stones' },
      { id: 't9', title: 'Kashmir', artist: 'Led Zeppelin' },
      { id: 't10', title: 'All Along The Watchtower', artist: 'Jimi Hendrix' },
      { id: 't11', title: 'Voodoo Child (Slight Return)', artist: 'Jimi Hendrix' },
      { id: 't12', title: 'Money For Nothing', artist: 'Dire Straits' },
      { id: 't13', title: 'War Pig', artist: 'Black Sabbath' },
      { id: 't14', title: 'Carry On My Wayward Son', artist: 'Kansas' },
      { id: 't15', title: 'Thunderstruck', artist: 'AC/DC' },
      { id: 't16', title: 'Master Of Puppets', artist: 'Metallica' },
      { id: 't17', title: 'Holy Diver', artist: 'Dio' },
      { id: 't18', title: 'Spirit In The Sky', artist: 'Norman Greenbaum' },
      { id: 't19', title: 'Welcome To The Jungle', artist: "Guns 'N Roses" },
      { id: 't20', title: 'Crazy Train', artist: 'Ozzy Osbourne' },
      { id: 't21', title: 'Back In Black', artist: 'AC/DC' },
      { id: 't22', title: 'Renegade', artist: 'Styx' },
      { id: 't23', title: 'Sabotage', artist: 'Beastie Boys' },
      { id: 't24', title: 'Kickstart My Heart', artist: 'Motley Crue' },
    ],
  },
  {
    id: '2',
    title: 'Creek Radio Season 2',
    mixcloudEmbed: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJWarChildOfTheCreek%2Fcreek-radio-classics-season-2%2F',
    tracks: [
      { id: 's2t1', title: 'Rock You Like a Hurricane', artist: 'Scorpions' },
      { id: 's2t2', title: 'Cherry Bomb', artist: 'The Runaways' },
      { id: 's2t3', title: 'Funk #49', artist: 'James Gang' },
      { id: 's2t4', title: 'War (What Is It Good For)', artist: 'Edwin Starr' },
      { id: 's2t5', title: 'Sympathy for the Devil', artist: 'The Rolling Stones' },
      { id: 's2t6', title: 'Run Through the Jungle', artist: 'Creedence Clearwater Revival' },
      { id: 's2t7', title: 'Helter Skelter', artist: 'Motley Crue' },
      { id: 's2t8', title: 'Highway to Hell', artist: 'AC/DC' },
      { id: 's2t9', title: 'Lights Out', artist: 'UFO' },
      { id: 's2t10', title: 'Cult of Personality', artist: 'Living Colour' },
      { id: 's2t11', title: 'Land of Confusion', artist: 'Genesis' },
      { id: 's2t12', title: 'Never Let Me Down Again', artist: 'Depeche Mode' },
      { id: 's2t13', title: 'The Stroke', artist: 'Billy Squier' },
      { id: 's2t14', title: 'Black Dog', artist: 'Led Zeppelin' },
      { id: 's2t15', title: 'Magic Carpet Ride', artist: 'Steppenwolf' },
      { id: 's2t16', title: 'For Whom the Bell Tolls', artist: 'Metallica' },
      { id: 's2t17', title: 'Electric Eye', artist: 'Judas Priest' },
      { id: 's2t18', title: 'The Mob Rules', artist: 'Black Sabbath' },
      { id: 's2t19', title: 'Civil War', artist: "Guns N' Roses" },
      { id: 's2t20', title: 'Running with the Devil', artist: 'Van Halen' },
      { id: 's2t21', title: "Baba O'Riley", artist: 'The Who' },
      { id: 's2t22', title: 'Riders on the Storm', artist: 'The Doors' },
      { id: 's2t23', title: 'Oats in the Water', artist: 'Ben Howard' },
      { id: 's2t24', title: 'The Man Comes Around', artist: 'Johnny Cash' },
    ],
  },
];
