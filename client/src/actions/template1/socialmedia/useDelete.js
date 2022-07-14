import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteTemplate1SocialMedia(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("template1-socialmedia");
    },
  });
};

export default useDelete;
