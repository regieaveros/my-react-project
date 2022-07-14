import * as api from "../../api/index";
import { useQuery } from "react-query";

const useLogoIcon = () => {
  return useQuery(["logoicon"], api.getLogoIcon);
};

export default useLogoIcon;
