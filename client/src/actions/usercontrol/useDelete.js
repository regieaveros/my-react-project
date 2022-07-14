import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteUserControl(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("usercontrol");
    },
  });
};

export default useDelete;
