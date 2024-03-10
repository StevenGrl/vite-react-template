export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const NODE_ENV = import.meta.env.VITE_NODE_ENV;
export const ENABLE_DEV_TOOLS = NODE_ENV !== 'prod' || !NODE_ENV;
