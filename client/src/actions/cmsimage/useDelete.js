import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteImage(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("image");
    },
  });
};

export default useDelete;
