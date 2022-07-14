import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createNote, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("note");
      if (queryClient.getQueryData("note")) {
        queryClient.setQueryData("note", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("note", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("note");
    },
  });
};

export default useCreate;
