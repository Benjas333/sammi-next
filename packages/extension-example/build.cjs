const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const chokidar = require('chokidar');
const argv = require('minimist')(process.argv.slice(2));

const lib_prefix = '[sammi-next]';
// const root = path.resolve(__dirname, '..', '..');
const configPath = path.join(process.cwd(), 'sammi.config.json');
const config = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath)) : {};

class ExtensionBuilder {
    constructor(config) {
        this.name = config.name || 'Extension Sample';
        this.id = config.id || this.name.toLowerCase().replace(/\s/g, '-');
        this.info = config.info || '';
        this.version = config.version || '';
        
        this.entry = config.entry || 'src/main.ts';
        this.externalPath = config.external || 'src/external.html';
        this.overPath = config.over || 'over.json';
        
        this.outDir = config.out.dir || 'dist';
        this.outJS = config.out.js || 'extension.js';
        this.outSEF = config.out.sef || 'extension.sef';
        
        this.required_fields = [
            {
                header: "extension_name",
                content: this.name,
            },
            {
                header: "extension_info",
                content: this.info,
            },
            {
                header: "extension_version",
                content: this.version,
            },
        ]
        
        this.external = null;
        this.command = null;
        this.commandRegex = /\w+\(\w+,\s*{\s*default:/gm;
        this.script = null;
        this.over = '{}';
    }
    
    get globalName() {
        return `SAMMIExtensions["${this.id}"]`;
    }
    
    updateExternal() {
        if (!fs.existsSync(this.externalPath)) return;
        
        const content = fs.readFileSync(this.externalPath, 'utf-8');
        this.external = `<div id="${this.id}-external">
${content}
</div>`;
    }
    
    updateScript() {
        const scriptPath = path.join(this.outDir, this.outJS);
        if (!fs.existsSync(scriptPath)) return;
        
        this.script = fs.readFileSync(scriptPath, 'utf-8');
    }
    
    updateOver() {
        if (!fs.existsSync(this.overPath)) return;
        
        this.over = fs.readFileSync(this.overPath, 'utf-8');
    }
    
    buildSEF() {
        const content = [];
        for (const field of this.required_fields) {
            content.push(`[${field.header}]`, field.content, '');
        }
        
        this.updateExternal();
        content.push('[insert_external]', this.external || '', '');
        
        this.updateScript();
        if (this.script) {
            this.command = this.commandRegex.test(this.script);
        }
        content.push('[insert_command]', this.command ? `${this.globalName}.default();` : '', '');
        content.push('[insert_hook]', '', ''); // TODO: maybe add hook retro-compatibility
        content.push('[insert_script]', this.script || '', '');
        this.updateOver();
        content.push('[insert_over]', this.over && this.over != '{}' ? this.over : '', '');
        return content.join('\n');
    }
    
    buildPreview() {
        this.updateExternal();
        this.updateScript();
        return fs.readFileSync('.sammi/preview.blueprint.html', 'utf-8')
        .replace(/{{EXTERNAL}}/, this.external || '')
        .replace(/{{SCRIPT}}/, this.script || '');
    }
}

const extension = new ExtensionBuilder(config);

const isWatch = !!argv.watch;
const isDev = !!argv.dev;

if (!fs.existsSync(extension.outDir))
    fs.mkdirSync(extension.outDir, { recursive: true });

async function buildOnce() {
    try {
        await esbuild.build({
            entryPoints: [extension.entry],
            bundle: true,
            platform: 'browser',
            format: 'iife',
            globalName: extension.globalName,
            target: ['es2020'],
            sourcemap: false,
            minify: !isDev,
            outfile: path.join(extension.outDir, extension.outJS),
        });
        
        fs.writeFileSync(path.join(extension.outDir, extension.outSEF), extension.buildSEF(), 'utf-8');
        fs.writeFileSync(path.join(extension.outDir, 'preview.html'), extension.buildPreview(), 'utf-8');
        
        console.log(`${lib_prefix} Built ${extension.outJS} and ${extension.outSEF}`);
    } catch (error) {
        console.error(lib_prefix, 'build error:', error);
    }
}

if (isWatch) {
    const watcher = chokidar.watch('src', { ignoreInitial: true });
    let timer = null;
    watcher.on('all', (event, p) => {
        console.log(`${lib_prefix} ${event}: ${p}`);
        if (timer)
            clearTimeout(timer);
        
        timer = setTimeout(() => buildOnce().catch(e => console.error(e)), 100);
    });
    (async () => {
        await buildOnce();
        console.log(lib_prefix, 'watching for changes...');
    })();
} else {
    buildOnce();
}
