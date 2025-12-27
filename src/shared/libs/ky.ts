import ky from 'ky';

export class UnauthorizedError extends Error {
  constructor() {
    super( 'Unauthorized' );
  }
}

export const kyInstance = ky.create( {
  prefixUrl: import.meta.env.VITE_BACK_URL,
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: {
    limit: 1,
    statusCodes: [ 400 ],
    methods: [ 'get', 'post', 'put', 'delete' ]
  },
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => { if ( response.status === 401 ) throw new UnauthorizedError(); }
    ]
  }
} );