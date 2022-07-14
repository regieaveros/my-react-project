import * as api from "../../api/index";
import { useQuery } from "react-query";

const useUsers = () => {
  return useQuery(["user"], api.getUsers);
};

export default useUsers;
