export const ACL = {
  ADMIN: {
    users: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
  READER: {
    users: {
      create: true,
      read: false,
      update: false,
      delete: false,
    },
  },
  USER: {
    users: {
      create: false,
      read: true,
      update: true,
      delete: false,
    },
  },
}
