import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useTestimonials = () => {
  return useQuery(["template2-testimonials"], api.getTemplate2Testimonials);
};

export default useTestimonials;
