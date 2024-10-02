"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";
import NavBar from '@/components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F6E1CF',
      },
      // secondary: {
      //   main: green[500],
      // },
    },
  });

  return (
    <html lang="pt-br">
      <body>
        <div id='root'>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <NavBar />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
