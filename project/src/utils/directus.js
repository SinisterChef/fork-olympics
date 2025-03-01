import { createDirectus, rest } from '@directus/sdk';

// Initialize the Directus client with REST transport
export const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL).with(rest());

console.log("Initialized Directus client:", directus);


