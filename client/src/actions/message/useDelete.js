import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteMessage(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("message");
    },
  });
};

export default useDelete;
