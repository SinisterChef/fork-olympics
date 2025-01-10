import { createDirectus, rest } from '@directus/sdk';

// Initialize the Directus client with REST transport
export const directus = createDirectus(import.meta.env.VITE_DIRECTUS_URL).with(rest());

console.log("Initialized Directus client:", directus);


