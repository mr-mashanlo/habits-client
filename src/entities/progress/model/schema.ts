import { z } from 'zod';

import type { PaginatedResponse } from '@/shared/types';

export const ProgressDTO = z.object( {
  date: z.string(),
  habits: z.array( z.string() )
} );

export const Progress = z.object( {
  _id: z.string(),
  user: z.string(),
  date: z.string(),
  habits: z.array( z.string() ),
  weight: z.number()
} );

export type ProgressDTO = z.infer<typeof ProgressDTO>;

export type Progress = z.infer<typeof Progress>;

export type PaginatedProgress = PaginatedResponse<Progress>