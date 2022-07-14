import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteTemplate2Professionals(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("template2-professionals");
    },
  });
};

export default useDelete;
