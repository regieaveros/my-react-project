import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useProfessionals = () => {
  return useQuery(["template2-professionals"], api.getTemplate2Professionals);
};

export default useProfessionals;
