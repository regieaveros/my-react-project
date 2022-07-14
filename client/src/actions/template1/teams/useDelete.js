import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteTemplate1Teams(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("template1-team");
    },
  });
};

export default useDelete;
