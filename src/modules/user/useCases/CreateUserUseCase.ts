import { prisma } from "../../../database/prismaClient";
interface IcreateUser {
  username: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ username, email, password }: IcreateUser) {
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
  }
}

export { CreateUserUseCase };
