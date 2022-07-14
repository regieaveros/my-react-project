import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useNews = () => {
  return useQuery(["template2-news"], api.getTemplate2News);
};

export default useNews;
