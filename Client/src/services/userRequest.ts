import axios from "axios";

const baseURL: string = "http://localhost:3000/user"

interface User {
    name: string;
    email: string;
    password: string;
}

// export const userLoader = () => {

// }


export const userAction = async (request: unknown) => {

    const user = Object.fromEntries(await request.formData());

    const res = await axios.post(
        baseURL,
        {
            name: user.name,
            email: user.email,
            password: user.password,
        }
      );
      console.log('creating user', res);
      return res.data
}
