export function getDataByDataURL(durl, fallback) {
  if (!globalThis.impData) {
    console.error("No data defined");
    return fallback || null;
  }
  if (!durl.startsWith("@")) {
    console.error("Not a data path", durl);
    return fallback || null;
  }
  const dataPath = durl.substring(1).split("/");
  return fallback || dataPath.reduce((a, e) => {
    if (!a) {
      return a;
    }
    return a[e];
  }, globalThis.impData);
}
