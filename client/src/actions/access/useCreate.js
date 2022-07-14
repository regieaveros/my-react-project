import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createAccess, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("access");
      if (queryClient.getQueryData("access")) {
        queryClient.setQueryData("access", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("access", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("access");
    },
  });
};

export default useCreate;
