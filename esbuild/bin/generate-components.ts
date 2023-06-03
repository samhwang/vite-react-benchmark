import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let imports = ``;
let renderCode = ``;

for (let i = 0; i < 1000; i++) {
  imports += `import { Comp${i} } from './components/comp${i}';\n`;
  renderCode += `<Comp${i}/>\n`;
  const leaf = path.resolve(__dirname, '..', 'src', 'components', `comp${i}.tsx`);
  fs.writeFileSync(
    leaf,
    `export function Comp${i}() {
    return <div>hello ${i}</div>;
  }`
  );
}

const code = `
 ${imports}
export default function App() {
  return <div>
   ${renderCode}
  </div>;
}
`;

const root = path.resolve(__dirname, '..', 'src', 'App.tsx');
fs.writeFileSync(root, code);
