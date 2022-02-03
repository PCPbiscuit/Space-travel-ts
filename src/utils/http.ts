const dev = process.env.NODE_ENV !== 'production';

export const http = {
  async get(path: string) {
    const res = await fetch(
      `${dev ? 'http://localhost:3000' : 'https://prod-link.com'}/api/${path}`,
      {},
    );
    return await res.json();
  },
};
