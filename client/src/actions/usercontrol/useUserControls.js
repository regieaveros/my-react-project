import * as api from "../../api/index";
import { useQuery } from "react-query";

const useUserControls = () => {
  return useQuery(["usercontrol"], api.getUserControl);
};

export default useUserControls;
