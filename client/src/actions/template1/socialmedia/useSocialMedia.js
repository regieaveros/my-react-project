import * as api from "../../../api/index";
import { useQuery } from "react-query";

const useSocialMedia = () => {
  return useQuery(["template1-socialmedia"], api.getTemplate1SocialMedia);
};

export default useSocialMedia;
