import "./globals.css";


export const metadata = {
  title: "MCMC",
  description: "Minister Of Christian Mission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

