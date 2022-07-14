import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createContent, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("content");
      if (queryClient.getQueryData("content")) {
        queryClient.setQueryData("content", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("content", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("content");
    },
  });
};

export default useCreate;
