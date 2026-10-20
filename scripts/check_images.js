const fs = require('fs');
const https = require('https');

const files = ['./data/destinations.ts', './data/diaries.ts', './data/guides.ts'];
const allUrls = [];
for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/https:\/\/images\.unsplash\.com[^\s'"\\]+/g) || [];
    allUrls.push(...matches);
  }
}

const uniqueUrls = Array.from(new Set(allUrls));
console.log(`Checking ${uniqueUrls.length} unique Unsplash URLs...`);

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR: ' + err.message });
    });
  });
}

(async () => {
  let failed = 0;
  for (const url of uniqueUrls) {
    const res = await checkUrl(url);
    if (res.status !== 200 && res.status !== 301 && res.status !== 302) {
      console.log(`❌ FAILED (${res.status}): ${res.url}`);
      failed++;
    }
  }
  if (failed === 0) {
    console.log(`✅ All ${uniqueUrls.length} image URLs returned 200/302 OK!`);
  } else {
    console.log(`Found ${failed} failing URLs!`);
  }
})();
