import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

export const EntryDTOSchema = z.object( {
  habit: z.string(),
  date: z.string()
} );

export const EntrySchema = z.object( {
  _id: z.string(),
  user: z.string(),
  habit: z.string(),
  date: z.string(),
  done: z.boolean(),
  archived: z.boolean()
} );

export type EntryDTO = z.infer<typeof EntryDTOSchema>;

export type Entry = z.infer<typeof EntrySchema>;

export type PaginatedEntry = PaginatedResponse<Entry>;