import { API_BASE } from "./constants";

export default {
  home: () => {
    return "/";
  },
  github: () => {
    return "https://www.xetalabs.com";
  },
  discord: () => {
    return "https://www.xetalabs.com";
  },
  docs: () => {
    return "https://www.xetalabs.com";
  },
  mailToMintplex: () => {
    return "mailto:info@xetalabs.com";
  },
  hosting: () => {
    return "mailto:info@xetalabs.com";
  },
  feedback: () => {
    return "mailto:info@xetalabs.com";
  },
  workspace: {
    chat: (slug) => {
      return `/workspace/${slug}`;
    },
  },
  exports: () => {
    return `${API_BASE.replace("/api", "")}/system/data-exports`;
  },
  apiDocs: () => {
    return `${API_BASE}/docs`;
  },
  admin: {
    system: () => {
      return `/admin/system-preferences`;
    },
    users: () => {
      return `/admin/users`;
    },
    invites: () => {
      return `/admin/invites`;
    },
    workspaces: () => {
      return `/admin/workspaces`;
    },
    chats: () => {
      return "/admin/workspace-chats";
    },
    appearance: () => {
      return "/admin/appearance";
    },
    apiKeys: () => {
      return "/admin/api-keys";
    },
  },
};
