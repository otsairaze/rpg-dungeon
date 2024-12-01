import { USER_ROLE } from "@prisma/client";

export const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    cash: 1000,
    energy: 50,
    imageUrl: "https://example.com/images/johndoe.png",
    token: 123456,
    role: USER_ROLE.ADMIN,
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    cash: 500,
    energy: 70,
    imageUrl: "https://example.com/images/janesmith.png",
    token: 789012,
    role: USER_ROLE.USER,
  },
];
