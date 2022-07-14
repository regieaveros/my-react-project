import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate1Teams, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template1-team");
      if (queryClient.getQueryData("template1-team")) {
        queryClient.setQueryData("template1-team", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("template1-team", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-team");
    },
  });
};

export default useCreate;
