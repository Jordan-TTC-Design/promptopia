import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'This is Promptopia',
  icons: {
    icon: ['/assets/images/logo.ico'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='zh'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
