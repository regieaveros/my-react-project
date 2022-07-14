import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createMessage, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("message");
      if (queryClient.getQueryData("message")) {
        queryClient.setQueryData("message", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("message", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("message");
    },
  });
};

export default useCreate;
