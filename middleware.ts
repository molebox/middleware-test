// --------THIS WORKS--------
//
//
// import { geolocation } from '@vercel/edge';
// import type { RequestContext } from "@vercel/edge";

// const BLOCKED_COUNTRY = 'US';

// export const config = {
//   // Only run the middleware on the home route
//   matcher: '/',
// };

// export default function middleware(request: Request, context: RequestContext) {
//   const url = new URL(request.url);
//   console.log({ request })
//   console.log({ context })

//   const { country } = geolocation(request) || 'US';
//   // You can also get the country using dot notation on the function
//   // const country = geolocation(request).country;

//   console.log({ country })

//   if (country === BLOCKED_COUNTRY) {
//     url.pathname = '/blocked';
//   } else {
//     url.pathname = '/index';
//   }

//   // Return a new redirect response
//   return Response.redirect(url);
// }

import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  console.log(req.url)
  return new NextResponse(JSON.stringify({ message: 'hello world!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
