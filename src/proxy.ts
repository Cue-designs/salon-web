import { timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

function matchesCredential(actual: string, expected: string): boolean {
  const actualBytes = Buffer.from(actual, "utf8");
  const expectedBytes = Buffer.from(expected, "utf8");

  return (
    actualBytes.length === expectedBytes.length &&
    timingSafeEqual(actualBytes, expectedBytes)
  );
}

function hasValidCredentials(
  authorization: string | null,
  expectedUsername: string,
  expectedPassword: string,
): boolean {
  const match = authorization?.match(/^Basic\s+([A-Za-z0-9+/]+={0,2})$/i);
  if (!match) return false;

  const encodedCredentials = match[1];
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString(
    "utf8",
  );

  if (
    Buffer.from(decodedCredentials, "utf8").toString("base64") !==
    encodedCredentials
  ) {
    return false;
  }

  const separator = decodedCredentials.indexOf(":");
  if (separator < 0) return false;

  const usernameMatches = matchesCredential(
    decodedCredentials.slice(0, separator),
    expectedUsername,
  );
  const passwordMatches = matchesCredential(
    decodedCredentials.slice(separator + 1),
    expectedPassword,
  );

  return usernameMatches && passwordMatches;
}

export function proxy(request: NextRequest) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    return new Response("Admin authentication is not configured.", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  if (
    hasValidCredentials(
      request.headers.get("authorization"),
      username,
      password,
    )
  ) {
    return;
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
      "WWW-Authenticate": 'Basic realm="Morrow Admin", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/Admin/:path*", "/admin/:path*"],
};
