export const routes = {
  home: "/",
  configurations: {
    page: "/configurations",
    options: {
      general: {
        page: "/configuration/general",
        options: [
          {
            id: 1,
            title: "General",
            page: "/configuration/general",
          },
        ],
      },
    },
  },
  client: {
    page: "/client",
    options: {
      general: {
        page: "/client/general",
        options: [
          {
            id: 1,
            title: "General",
            page: "/client/general",
          },
        ],
      },
    },
  },
  auth: {
    signin: "/auth/signin",
    resetPassword: "/auth/reset-password",
  },
};
