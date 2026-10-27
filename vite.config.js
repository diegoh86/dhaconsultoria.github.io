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
          if (url.includes('petshop-e-o-bicho')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/petshop-e-o-bicho/' });
            res.end();
            return;
          }
          if (url.includes('clinica-novo-sorriso') || url.includes('novo-sorriso')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/novo-sorriso/' });
            res.end();
            return;
          }
          if (url.includes('dianna-bakery')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/dianna-bakery/' });
            res.end();
            return;
          }
          if (url.includes('nama-log')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/nama-log/' });
            res.end();
            return;
          }
          if (url.includes('log-mova')) {
            res.writeHead(302, { Location: 'https://diegoh86.github.io/log-mova/' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        hotsites: './hotsites/index.html'
      }
    }
  }
});
