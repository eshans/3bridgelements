import type { ImageMetadata } from 'astro';
import type { SimpleIcon } from 'simple-icons';
import {
  siBeatport,
  siFacebook,
  siInstagram,
  siSoundcloud,
  siSpotify,
  siX,
  siYoutube,
} from 'simple-icons';

// Every image in these folders is loaded automatically. Reference one by filename:
//   cover: cover('particles.jpg')   → src/assets/releases/particles.jpg
//   photo: photo('fw.jpg')          → src/assets/artists/fw.jpg
const coverFiles = import.meta.glob<ImageMetadata>('../assets/releases/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const photoFiles = import.meta.glob<ImageMetadata>('../assets/artists/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

function pick(files: Record<string, ImageMetadata>, folder: string, file: string): ImageMetadata {
  const image = files[`../assets/${folder}/${file}`];
  if (!image) {
    const available = Object.keys(files).map((k) => k.split('/').pop()).join(', ');
    throw new Error(`Image not found: src/assets/${folder}/${file}\nFiles in that folder: ${available}`);
  }
  return image;
}

const cover = (file: string) => pick(coverFiles, 'releases', file);
const photo = (file: string) => pick(photoFiles, 'artists', file);

export const site = {
  name: '3Bridge Elements',
  tagline: 'Downtempo, ambient & cinematic electronic music',
  description:
    '3Bridge Elements is the downtempo and ambient imprint of 3Bridge Records, founded by Greg Cuoco and Eric Shans.',
  email: 'eric@3bridgerecords.com',
} as const;

export interface Social {
  name: string;
  handle: string;
  href: string;
  icon: SimpleIcon;
}

export const socials: Social[] = [
  {
    name: 'Spotify',
    handle: 'Label playlist',
    href: 'https://open.spotify.com/user/1217429684/playlist/1MPPPdEAkn4M1KdUjU2ilQ',
    icon: siSpotify,
  },
  {
    name: 'SoundCloud',
    handle: '3bridge-elements',
    href: 'https://soundcloud.com/3bridge-elements',
    icon: siSoundcloud,
  },
  {
    name: 'Beatport',
    handle: 'Label catalog',
    href: 'https://www.beatport.com/label/3bridge-elements/64949',
    icon: siBeatport,
  },
  {
    name: 'Instagram',
    handle: '@3bridge_records',
    href: 'https://www.instagram.com/3bridge_records/',
    icon: siInstagram,
  },
  {
    name: 'YouTube',
    handle: '3Bridge Elements',
    href: 'https://www.youtube.com/channel/UCGV5Z3gEYWaHJZZ-r5Tk2zA',
    icon: siYoutube,
  },
  {
    name: 'Facebook',
    handle: '3BridgeElements',
    href: 'https://www.facebook.com/3BridgeElements/',
    icon: siFacebook,
  },
  {
    name: 'X',
    handle: '@3bridgerecords',
    href: 'https://twitter.com/3bridgerecords',
    icon: siX,
  },
];

export interface Release {
  catalog: string;
  title: string;
  /** Must match an artist `name` to cross-link on the artists page. */
  artist?: string;
  cover: ImageMetadata;
  href: string;
  store: 'Beatport' | 'Bandcamp';
}

/** Newest first. Add new releases to the top. */
export const releases: Release[] = [
  {
    catalog: '3BE023',
    title: 'Your Sky',
    artist: 'Eric Shans',
    cover: cover('yoursky.jpg'),
    href: 'https://www.beatport.com/release/your-sky/6986707',
    store: 'Beatport',
  },
  {
    catalog: '3BE022',
    title: 'Breaking Free',
    artist: 'Enitsugua',
    cover: cover('breakingfree.jpg'),
    href: 'https://www.beatport.com/release/breaking-free/4635123',
    store: 'Beatport',
  },

  {
    catalog: '3BE021',
    title: 'Meerweh',
    artist: 'IPI',
    cover: cover('ipi.jpg'),
    href: 'https://www.beatport.com/release/meerweh/4331522',
    store: 'Beatport',
  },
  {
    catalog: '3BE020',
    title: 'Clara Audencia',
    artist: 'Eisenheim',
    cover: cover('clara.jpg'),
    href: 'https://www.beatport.com/release/clara-audencia/4225130',
    store: 'Beatport',
  },
  {
    catalog: '3BE019',
    title: 'Subterranean Visions',
    artist: 'Eric Shans',
    cover: cover('visions.jpg'),
    href: 'https://www.beatport.com/release/subterranean-visions/4036895',
    store: 'Beatport',
  },

  {
    catalog: '3BE018',
    title: 'ABC',
    artist: 'Enitsugua',
    cover: cover('abc.jpg'),
    href: 'https://www.beatport.com/release/abc/3671955',
    store: 'Beatport',
  },
  {
    catalog: '3BE017',
    title: 'Sole Purpose',
    artist: 'Deep Woods',
    cover: cover('sole.jpg'),
    href: 'https://www.beatport.com/release/sole-purpose/3525279',
    store: 'Beatport',
  },
  {
    catalog: '3BE016',
    title: 'Migrating Vectors',
    artist: 'Enitsugua',
    cover: cover('migrating.jpg'),
    href: 'https://www.beatport.com/release/migrating-vectors/2995180',
    store: 'Beatport',
  },

  {
    catalog: '3BE015',
    title: 'Liquid Time',
    artist: 'Eric Shans',
    cover: cover('liquid.jpg'),
    href: 'https://www.beatport.com/release/liquid-time/2962578',
    store: 'Beatport',
  },
  {
    catalog: '3BE014',
    title: 'Particles',
    artist: 'Eisenheim',
    cover: cover('particles.jpg'),
    href: 'https://www.beatport.com/release/particles/2819255',
    store: 'Beatport',
  },
  {
    catalog: '3BE013',
    title: 'Airborne: Music for Restorative Yoga',
    artist: 'Deep Woods',
    cover: cover('airborne.jpg'),
    href: 'https://www.beatport.com/release/airborne-music-for-restorative-yoga/2626672',
    store: 'Beatport',
  },
  {
    catalog: '3BE011',
    title: 'In Another Place',
    artist: 'Eric Shans',
    cover: cover('inanotherplace.jpg'),
    href: 'https://ericshans.bandcamp.com/album/in-another-place',
    store: 'Bandcamp',
  },
  {
    catalog: '3BE010',
    title: 'Voyages Vol. 1',
    artist: 'Various Artists',
    cover: cover('bestof.jpg'),
    href: 'https://www.beatport.com/release/voyages-vol-1/2337369',
    store: 'Beatport',
  },
  {
    catalog: '3BE009',
    title: 'Reflections EP',
    artist: 'Begoña',
    cover: cover('reflections.jpg'),
    href: 'https://www.beatport.com/release/reflections-ep/2265923',
    store: 'Beatport',
  },
  {
    catalog: '3BE008',
    title: 'Signals EP',
    artist: 'Futureworlder',
    cover: cover('signals.jpg'),
    href: 'https://www.beatport.com/release/signals-ep/2237793',
    store: 'Beatport',
  },
  {
    catalog: '3BE007',
    title: 'The Heart Beats Steady',
    artist: 'Eric Shans',
    cover: cover('heartbeatsteady.jpg'),
    href: 'https://www.beatport.com/release/the-heart-beats-steady/2216159',
    store: 'Beatport',
  },
  {
    catalog: '3BE006',
    title: 'Balancing Act: A Yoga Journey',
    artist: 'Deep Woods',
    cover: cover('balance.jpg'),
    href: 'https://www.beatport.com/release/balancing-act-a-yoga-journey/2145494',
    store: 'Beatport',
  },
  {
    catalog: '3BE005',
    title: 'Cosmic Explorations',
    artist: 'Eric Shans',
    cover: cover('cosmic.jpg'),
    href: 'https://www.beatport.com/release/cosmic-explorations/2136952',
    store: 'Beatport',
  },
  {
    catalog: '3BE004',
    title: 'Calm, Cool, and Collective',
    artist: 'Chris Luzz',
    cover: cover('calm.jpg'),
    href: 'https://www.beatport.com/release/calm-cool-and-collective/2110711',
    store: 'Beatport',
  },
  {
    catalog: '3BE003',
    title: 'Horizons EP',
    artist: 'Begoña',
    cover: cover('horizons.jpg'),
    href: 'https://www.beatport.com/release/horizons-ep/2075747',
    store: 'Beatport',
  },
  {
    catalog: '3BE002',
    title: 'No Endings EP',
    artist: 'Eric Shans',
    cover: cover('no-endings.jpg'),
    href: 'https://www.beatport.com/release/no-endings-ep/2075775',
    store: 'Beatport',
  },
  {
    catalog: '3BE001',
    title: 'Epilogue EP',
    artist: 'Futureworlder',
    cover: cover('epilogue.jpg'),
    href: 'https://www.beatport.com/release/epilogue-ep/2077825',
    store: 'Beatport',
  },
];

export interface Artist {
  slug: string;
  name: string;
  aka?: string;
  photo: ImageMetadata;
  href: string;
  bio: string;
}

export const artists: Artist[] = [
  {
    slug: 'eric-shans',
    name: 'Eric Shans',
    photo: photo('eric-press.jpg'),
    href: 'https://www.facebook.com/djericshans/',
    bio: 'A producer and DJ based in Brooklyn, NY, and co-owner of 3Bridge Elements, Eric Shans has been making and playing music for more than two decades. He has always been drawn to melodic, dreamy sounds with a smattering of grit underneath. With four albums and a handful of EPs out as Phenotract, plus many more tracks under his own name, his music reflects the sounds he loves to hear: forward-thinking, and at times wrapped in a sense of nostalgia. His releases on 3Bridge Elements span downtempo, ambient and cinematic territory.',
  },
  {
    slug: 'futureworlder',
    name: 'Futureworlder',
    aka: 'Brian Traister',
    photo: photo('fw.jpg'),
    href: 'https://www.facebook.com/futureworlder/',
    bio: 'Brian Traister’s love of electronic music began early: trying to emulate R2-D2 on a Remco SoundFX Machine, his first “synth,” and soaking up disco on Solid Gold. His productions for the dance floor are balanced by his ambient work, and he often combines the two.',
  },
  {
    slug: 'begona',
    name: 'Begoña',
    photo: photo('begona.jpg'),
    href: 'https://www.facebook.com/begona.nyc',
    bio: 'Begoña is one half of New York’s renowned producer and DJ duo Sleepy & Boo, and made her solo recording debut on 3Bridge Elements. Her Horizons EP grew out of a deep interest in meditation, spirituality and consciousness, and its follow-up, Reflections, continues that ethos. Her music explores contemplative grooves inspired by nature and stillness, drawing on downtempo, dub, ambient and balearic sounds. She believes music has the power to heal, transform and connect.',
  },
  {
    slug: 'chris-luzz',
    name: 'Chris Luzz',
    photo: photo('chrisluzz.jpg'),
    href: 'https://www.facebook.com/chrisluzzmusic',
    bio: 'Chris Luzz is a longtime NYC producer and DJ and co-owner of Little Giant Records. His wide-ranging taste shows in his productions, and his EP Calm, Cool, and Collective showcases his downtempo side.',
  },
  {
    slug: 'deep-woods',
    name: 'Deep Woods',
    aka: 'Greg Cuoco',
    photo: photo('gregintropicelm.jpg'),
    href: 'https://www.facebook.com/deepwoodsnyc/',
    bio: 'Deep Woods is one half of 3Bridge Elements, with a long catalog and deep experience producing and DJing. His album Balancing Act: A Yoga Journey is a full meditation on the practice of yoga.',
  },
  {
    slug: 'eisenheim',
    name: 'Eisenheim',
    photo: photo('eisenheim.jpg'),
    href: 'https://www.facebook.com/eisenheimusic/',
    bio: 'Eisenheim’s music tells stories through notes, songs and words: a tale of chances and choices, and an invitation to step into a different universe and see things from another perspective.',
  },
  {
    slug: 'enitsugua',
    name: 'Enitsugua',
    photo: photo('augustine.jpg'),
    href: 'https://www.facebook.com/augustine.backer',
    bio: 'One half of the duo Fermion, Enitsugua\'s music is a blend of classical and electronic music heavily created by analogue sounding synthesizers and sequencing.',
  },
  {
    slug: 'ipi',
    name: 'IPI',
    photo: photo('ipibio.jpg'),
    href: 'https://www.facebook.com/ipi.nyc',
    bio: 'Prepare to be transported to the cutting-edge realms of groovy minimal techno and house music. IPI, the talented DJ and producer, has been a prominent figure in Cologne’s vibrant electronic music underground for years, regularly delivering sets that combine hypnotic rhythms with an irresistible groove and an unwavering commitment to crafting music that moves both body and spirit. With a keen sense of sonic innovation and a passion for electronic beats, he has become a driving force in the city’s music scene. Managing the Lust und Freude Musik label and as a resident DJ at the world-famous Gewölbe, he has become a well-known figure in electronic music worldwide.',
  },
];

export const releasesBy = (name: string) => releases.filter((r) => r.artist === name);
