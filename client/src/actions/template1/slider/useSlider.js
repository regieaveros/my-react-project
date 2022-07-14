import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useSlider = () => {
  return useQuery(["template1-slider"], api.getTemplate1Slider);
};

export default useSlider;
