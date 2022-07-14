import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useServices = () => {
  return useQuery(["template2-services"], api.getTemplate2Services);
};

export default useServices;
