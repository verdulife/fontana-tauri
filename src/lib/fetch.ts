import { fetch } from '@tauri-apps/plugin-http';

export async function getData() {
  const response = await fetch('http://test.tauri.app/data.json');
  return await response.json();
}

export function test() {
  console.log('test');
}