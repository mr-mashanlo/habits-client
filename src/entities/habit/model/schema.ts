import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

export const HabitDTOSchema = z.object( {
  title: z.string()
} );

export const HabitSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  title: z.string(),
  archived: z.boolean(),
  created: z.number(),
  startDate: z.number(),
  endDate: z.number().optional()
} );

export type HabitDTO = z.infer<typeof HabitDTOSchema>;

export type Habit = z.infer<typeof HabitSchema>;

export type PaginatedHabit = PaginatedResponse<Habit>;