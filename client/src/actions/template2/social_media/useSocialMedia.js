import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useSocialMedia = () => {
  return useQuery(["template2-social-media"], api.getTemplate2SocialMedia);
};

export default useSocialMedia;
