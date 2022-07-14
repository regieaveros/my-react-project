import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createUser, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("user");
      if (queryClient.getQueryData("user")) {
        queryClient.setQueryData("user", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("user", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("user");
    },
  });
};

export default useCreate;
