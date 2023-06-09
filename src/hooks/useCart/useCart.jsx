import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
const useCart = () => {
  const { user, loading } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch];
};
export default useCart;
