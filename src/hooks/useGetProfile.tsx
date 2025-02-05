import axios from "axios";

type TUseGetProfile = {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
};

export const useGetProfile = async (
  token: string
): Promise<TUseGetProfile | "ERROR"> => {
  return axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return "ERROR";
    });
};
