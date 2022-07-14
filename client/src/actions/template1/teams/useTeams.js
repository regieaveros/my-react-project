import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useTeams = () => {
  return useQuery(["template1-team"], api.getTemplate1Teams);
};

export default useTeams;
