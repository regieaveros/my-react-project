import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteAccess(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("access");
    },
  });
};

export default useDelete;
