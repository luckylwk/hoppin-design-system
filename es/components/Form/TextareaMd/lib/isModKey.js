/**
 * Detect Cmd or Ctrl by platform for keyboard shortcuts
 */
export default function isModKey(event) {
  var isMac = typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
  return isMac ? event.metaKey : event.ctrlKey;
}