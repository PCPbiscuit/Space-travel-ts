export const http = {
  async get(path: string) {
    const res = await fetch(path, {});
    return await res.json();
  },
};
