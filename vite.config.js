import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'hotsites-redirect-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || '';
          if (url.includes('ceo-odontologia')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/ceo-odontologia/' });
            res.end();
            return;
          }
          if (url.includes('clinica-odonto-moderna')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/clinica-odonto-moderna/' });
            res.end();
            return;
          }
          if (url.includes('petlucky')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/petlucky/' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ]
});
