import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteContent(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("content");
    },
  });
};

export default useDelete;
