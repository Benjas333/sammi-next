Bun.build({
        entrypoints: ['./src/main.ts'],
        outdir: './dist',
        target: 'browser',
        format: 'esm',
        minify: false,
        sourcemap: 'external',
        naming: {
                entry: 'extension.[ext]',
        },
        plugins: [],
}).then(result => {
        if (!result.success) console.error('Build failed', result.logs);
}).catch(e => {
        console.error(e);
        process.exit(1);
})
