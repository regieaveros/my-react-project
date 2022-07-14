import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteTemplate2Services(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("template2-services");
    },
  });
};

export default useDelete;
