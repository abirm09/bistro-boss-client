import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user/admin/${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
