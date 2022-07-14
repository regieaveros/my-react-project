import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useBestServices = () => {
  return useQuery(["template2-best-services"], api.getTemplate2BestServices);
};

export default useBestServices;
