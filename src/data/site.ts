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

import airborne from '../assets/releases/airborne.jpg';
import balance from '../assets/releases/balance.jpg';
import bestof from '../assets/releases/bestof.jpg';
import calm from '../assets/releases/calm.jpg';
import cosmic from '../assets/releases/cosmic.jpg';
import epilogue from '../assets/releases/epilogue.jpg';
import heartbeatsteady from '../assets/releases/heartbeatsteady.jpg';
import horizons from '../assets/releases/horizons.jpg';
import inanotherplace from '../assets/releases/inanotherplace.jpg';
import noEndings from '../assets/releases/no-endings.jpg';
import particles from '../assets/releases/particles.jpg';
import reflections from '../assets/releases/reflections.jpg';
import signals from '../assets/releases/signals.jpg';

import begona from '../assets/artists/begona.jpg';
import chrisluzz from '../assets/artists/chrisluzz.jpg';
import deepwoods from '../assets/artists/gregintropicelm.jpg';
import eisenheim from '../assets/artists/eisenheim.jpg';
import ericshans from '../assets/artists/eric-press.jpg';
import futureworlder from '../assets/artists/fw.jpg';

export const site = {
  name: '3Bridge Elements',
  tagline: 'Downtempo, ambient & cinematic electronic music',
  description:
    '3Bridge Elements is the downtempo and ambient imprint of 3Bridge Records, founded by Greg Cuoco and Eric Shans.',
  email: '3bridgelements@gmail.com',
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
    catalog: '3BE014',
    title: 'Particles',
    artist: 'Eisenheim',
    cover: particles,
    href: 'https://www.beatport.com/release/particles/2819255',
    store: 'Beatport',
  },
  {
    catalog: '3BE013',
    title: 'Airborne: Music for Restorative Yoga',
    artist: 'Deep Woods',
    cover: airborne,
    href: 'https://www.beatport.com/release/airborne-music-for-restorative-yoga/2626672',
    store: 'Beatport',
  },
  {
    catalog: '3BE011',
    title: 'In Another Place',
    artist: 'Eric Shans',
    cover: inanotherplace,
    href: 'https://ericshans.bandcamp.com/album/in-another-place',
    store: 'Bandcamp',
  },
  {
    catalog: '3BE010',
    title: 'Voyages Vol. 1',
    artist: 'Various Artists',
    cover: bestof,
    href: 'https://www.beatport.com/release/voyages-vol-1/2337369',
    store: 'Beatport',
  },
  {
    catalog: '3BE009',
    title: 'Reflections EP',
    artist: 'Begoña',
    cover: reflections,
    href: 'https://www.beatport.com/release/reflections-ep/2265923',
    store: 'Beatport',
  },
  {
    catalog: '3BE008',
    title: 'Signals EP',
    artist: 'Futureworlder',
    cover: signals,
    href: 'https://www.beatport.com/release/signals-ep/2237793',
    store: 'Beatport',
  },
  {
    catalog: '3BE007',
    title: 'The Heart Beats Steady',
    artist: 'Eric Shans',
    cover: heartbeatsteady,
    href: 'https://www.beatport.com/release/the-heart-beats-steady/2216159',
    store: 'Beatport',
  },
  {
    catalog: '3BE006',
    title: 'Balancing Act: A Yoga Journey',
    artist: 'Deep Woods',
    cover: balance,
    href: 'https://www.beatport.com/release/balancing-act-a-yoga-journey/2145494',
    store: 'Beatport',
  },
  {
    catalog: '3BE005',
    title: 'Cosmic Explorations',
    artist: 'Eric Shans',
    cover: cosmic,
    href: 'https://www.beatport.com/release/cosmic-explorations/2136952',
    store: 'Beatport',
  },
  {
    catalog: '3BE004',
    title: 'Calm, Cool, and Collective',
    artist: 'Chris Luzz',
    cover: calm,
    href: 'https://www.beatport.com/release/calm-cool-and-collective/2110711',
    store: 'Beatport',
  },
  {
    catalog: '3BE003',
    title: 'Horizons EP',
    artist: 'Begoña',
    cover: horizons,
    href: 'https://www.beatport.com/release/horizons-ep/2075747',
    store: 'Beatport',
  },
  {
    catalog: '3BE002',
    title: 'No Endings EP',
    artist: 'Eric Shans',
    cover: noEndings,
    href: 'https://www.beatport.com/release/no-endings-ep/2075775',
    store: 'Beatport',
  },
  {
    catalog: '3BE001',
    title: 'Epilogue EP',
    artist: 'Futureworlder',
    cover: epilogue,
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
    photo: ericshans,
    href: 'https://www.facebook.com/djericshans/',
    bio: 'A producer and DJ based in Brooklyn, NY, and co-owner of 3Bridge Elements, Eric Shans has been making and playing music for more than two decades. He has always been drawn to melodic, dreamy sounds with a smattering of grit underneath. With four albums and a handful of EPs out as Phenotract, plus many more tracks under his own name, his music reflects the sounds he loves to hear: forward-thinking, and at times wrapped in a sense of nostalgia. His releases on 3Bridge Elements span downtempo, ambient and cinematic territory.',
  },
  {
    slug: 'futureworlder',
    name: 'Futureworlder',
    aka: 'Brian Traister',
    photo: futureworlder,
    href: 'https://www.facebook.com/futureworlder/',
    bio: 'Brian Traister’s love of electronic music began early: trying to emulate R2-D2 on a Remco SoundFX Machine, his first “synth,” and soaking up disco on Solid Gold. His productions for the dance floor are balanced by his ambient work, and he often combines the two.',
  },
  {
    slug: 'begona',
    name: 'Begoña',
    photo: begona,
    href: 'https://www.facebook.com/begona.nyc',
    bio: 'Begoña is one half of New York’s renowned producer and DJ duo Sleepy & Boo, and made her solo recording debut on 3Bridge Elements. Her Horizons EP grew out of a deep interest in meditation, spirituality and consciousness, and its follow-up, Reflections, continues that ethos. Her music explores contemplative grooves inspired by nature and stillness, drawing on downtempo, dub, ambient and balearic sounds. She believes music has the power to heal, transform and connect.',
  },
  {
    slug: 'chris-luzz',
    name: 'Chris Luzz',
    photo: chrisluzz,
    href: 'https://www.facebook.com/chrisluzzmusic',
    bio: 'Chris Luzz is a longtime NYC producer and DJ and co-owner of Little Giant Records. His wide-ranging taste shows in his productions, and his EP Calm, Cool, and Collective showcases his downtempo side.',
  },
  {
    slug: 'deep-woods',
    name: 'Deep Woods',
    aka: 'Greg Cuoco',
    photo: deepwoods,
    href: 'https://www.facebook.com/deepwoodsnyc/',
    bio: 'Deep Woods is one half of 3Bridge Elements, with a long catalog and deep experience producing and DJing. His album Balancing Act: A Yoga Journey is a full meditation on the practice of yoga.',
  },
  {
    slug: 'eisenheim',
    name: 'Eisenheim',
    photo: eisenheim,
    href: 'https://www.facebook.com/eisenheimusic/',
    bio: 'Eisenheim’s music tells stories through notes, songs and words: a tale of chances and choices, and an invitation to step into a different universe and see things from another perspective.',
  },
];

export const releasesBy = (name: string) => releases.filter((r) => r.artist === name);
