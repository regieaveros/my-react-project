import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((dataId) => api.deleteNote(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries("note");
    },
  });
};

export default useDelete;
