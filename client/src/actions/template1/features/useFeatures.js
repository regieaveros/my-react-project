import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useFeatures = () => {
  return useQuery(["template1-feature"], api.getTemplate1Features);
};

export default useFeatures;
