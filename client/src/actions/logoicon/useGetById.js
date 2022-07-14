import * as api from "../../api/index";
import { useQuery } from "react-query";

const useGetById = (id) => {
  return useQuery(["logoicon"], api.getByIdLogoIcon(id));
};

export default useGetById;
