import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useWorkShowcase = () => {
  return useQuery(["template2-work-showcase"], api.getTemplate2WorkShowcase);
};

export default useWorkShowcase;
