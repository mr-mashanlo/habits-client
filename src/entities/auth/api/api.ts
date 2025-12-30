import { type KyResponse } from 'ky';

import { kyInstance } from '@/shared/libs';

import { type Auth, type AuthDTO } from '../model/schema';

class AuthService {

  signin = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance( 'auth/signin', { method: 'post', body: JSON.stringify( data ) } );
  };

  signup = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance( 'auth/signup', { method: 'post', body: JSON.stringify( data ) } );
  };

  signout = (): Promise<KyResponse<{ ok: boolean }>> => {
    return kyInstance( 'auth/signout', { method: 'get' } );
  };

  refresh = (): Promise<KyResponse<Auth>> => {
    return kyInstance( 'auth/refresh', { method: 'get' } );
  };

  me = (): Promise<KyResponse<Auth>> => {
    return kyInstance( 'auth/me', { method: 'get' } );
  };

}

export const authService = new AuthService();