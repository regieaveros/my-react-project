import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteTemplate2SocialMedia(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("template2-social-media");
    },
  });
};

export default useDelete;
