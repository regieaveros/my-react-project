import * as api from "../../api/index";
import { useQuery } from "react-query";

const useContents = () => {
  return useQuery(["content"], api.getContent);
};

export default useContents;
