import fs from 'fs';
import path from 'path';

async function globalTeardown() {
  const authFile = path.join(__dirname, 'auth.json');
  
  // Delete auth file after tests complete
  if (fs.existsSync(authFile)) {
    fs.unlinkSync(authFile);
    console.log('✅ Auth file deleted in global teardown.');
  } else {
    console.log('⚠️ Auth file not found.');
  }

  // You can add any cleanup logic here
}

export default globalTeardown;
