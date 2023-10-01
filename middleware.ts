
// import { NextRequest, NextResponse } from 'next/server'
// import { match } from '@formatjs/intl-localematcher';

// var Negotiator = require('negotiator');
// let locales = ['fr', 'en'];

// export let defaultLocale = 'en';

// function getLocale(request: Request): string {

//   const headers = new Headers(request.headers)
//   const acceptLanguage = headers.get("accept-language")

//   if (acceptLanguage) {
//     headers.set('accept-language', acceptLanguage.replaceAll("_", "-"))
//   }

//   const headersObject = Object.fromEntries(headers.entries());
//   const languages = new Negotiator({ headers: headersObject }).languages();

//   return match(languages, locales, defaultLocale);
// }

// export function middleware(request: NextRequest) {
  
//   let locale = getLocale(request) ?? defaultLocale
//   const pathname = request.nextUrl.pathname
//   const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

//   return NextResponse.rewrite(newUrl)
// }
 
// export const config = {
//   // Skip all paths that should not be internationalized. This example skips the
//   // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
//   matcher: 
//   // ['/((?!_next).*)']
//   ['/((?!api|_next|.*\\..*).*)']
// };

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'
var Negotiator = require('negotiator')

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next|.*\\..*).*)']
  // ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}