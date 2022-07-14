import * as api from "../../api/index";
import { useQuery } from "react-query";

const useMessages = () => {
  return useQuery(["message"], api.getMessage);
};

export default useMessages;
