import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteLogoIcon(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("logoicon");
    },
  });
};

export default useDelete;
