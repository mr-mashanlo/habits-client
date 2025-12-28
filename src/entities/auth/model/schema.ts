import { z } from 'zod';

export const AuthDTOSchema = z.object( {
  email: z.email( 'Invalid email address' ),
  password: z.string().min( 8, 'Password must be 8 or more characters long' )
} );

export const AuthSchema = z.object( {
  id: z.string(),
  token: z.string(),
  expired: z.number()
} );

export type AuthDTO = z.infer<typeof AuthDTOSchema>;

export type Auth = z.infer<typeof AuthSchema>;