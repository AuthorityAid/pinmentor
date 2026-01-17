export const metadata = {
  title: "PinMentor – Smarter Growth for Pinterest Creators",
  description:
    "PinMentor is launching soon. A powerful Pinterest growth and analytics tool for creators, marketers, and brands.",
  keywords: [
    "Pinterest tool",
    "Pinterest growth",
    "Pinterest analytics",
    "PinMentor",
    "Pinterest marketing"
  ],
  openGraph: {
    title: "PinMentor – Launching Soon",
    description:
      "Smarter Growth for Pinterest Creators. Launching very soon.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
