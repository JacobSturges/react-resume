import esbuildServe from 'esbuild-serve';

esbuildServe(
  {
    entryPoints: ['src/app.tsx'],
    bundle: true,
    minify: true,
    watch: true,
    outfile: 'public/app.js',
    define: {
      'process.env.NODE_ENV': '"development"',
      'process.env.ENVIRONMENT': '"development"',
    },
  },
  {
    port: 5002,
    root: './public',
  },
);
