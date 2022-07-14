import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useProducts = () => {
  return useQuery(["template1-products"], api.getTemplate1Products);
};

export default useProducts;
