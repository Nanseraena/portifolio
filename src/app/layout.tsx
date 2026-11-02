import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nansera Ena — Software Developer",
  description:
    "Nansera Ena is a full-stack software developer in Kampala, Uganda, specialising in React, Next.js, TypeScript, Django, and scalable web applications.",
  keywords:
    "Nansera Ena, Full Stack Developer Uganda, React Developer, Next.js, TypeScript, Django, Flutter, Software Developer Kampala",
  icons: {
    icon: [{ url: "/ena-favicon.png", type: "image/png", sizes: "878x878" }],
    shortcut: "/ena-favicon.png",
    apple: [{ url: "/ena-favicon.png", sizes: "878x878", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Nansera Ena — Software Developer",
    description:
      "Full-stack software developer building accessible, scalable web and mobile experiences.",
    type: "website",
    images: [{ url: "/ena-nansera-profile.jpeg", width: 878, height: 1080, alt: "Nansera Ena" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nansera Ena — Software Developer",
    description: "Full-stack software developer building accessible, scalable digital experiences.",
    images: ["/ena-nansera-profile.jpeg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nansera Ena",
  image: "/ena-nansera-profile.jpeg",
  jobTitle: "Software Developer",
  email: "mailto:enanansera311@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
  sameAs: [
    "https://github.com/Nanseraena",
    "https://linkedin.com/in/ena-nansera-a4bb18253",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className="page-gradient min-h-full flex flex-col">{children}</body>
    </html>
  );
}
