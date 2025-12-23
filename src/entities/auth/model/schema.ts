import { z } from 'zod';

export const AuthDTO = z.object( {
  email: z.email( 'Invalid email address' ),
  password: z.string().min( 8, 'Password must be 8 or more characters long' )
} );

export const Auth = z.object( {
  id: z.string(),
  token: z.string(),
  expired: z.number()
} );

export type AuthDTO = z.infer<typeof AuthDTO>;

export type Auth = z.infer<typeof Auth>;