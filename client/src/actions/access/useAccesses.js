import * as api from "../../api/index";
import { useQuery } from "react-query";

const useAccesses = () => {
  return useQuery(["access"], api.getAccess);
};

export default useAccesses;
