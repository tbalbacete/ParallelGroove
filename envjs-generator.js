// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as fs from 'fs';

const args = process.argv.slice(2);

const outputFile = args[0];
const varObject = Object.keys(process.env).reduce(
  (vars, key) => ({
    ...vars,
    [key]: key.startsWith("REACT_APP_") ? process.env[key] : undefined,
  }),
  { REACT_APP_VERSION: new Date().getTime() },
);

fs.writeFileSync(outputFile, `window.env = ${JSON.stringify(varObject, null, 2)}`);
