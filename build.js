import { $ } from "bun";
const platforms = ["linux-x64", "linux-arm64", "windows-x64", "darwin-x64", "darwin-arm64"];
for await (const platform of platforms) {
    console.log(`Building for ${platform}...\n`);
    await $`bun build --minify --compile --outfile=./dist/namaz-vakti-${platform.replace("darwin", "macos")} --target=bun-${platform} ./src/index.js`
    console.log("");
}
console.log("Done!");