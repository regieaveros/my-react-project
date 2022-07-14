import * as api from "../../api/index";
import { useQuery } from "react-query";

const useImages = () => {
  return useQuery(["image"], api.getImages);
};

export default useImages;
