import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteUser(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });
};

export default useDelete;
