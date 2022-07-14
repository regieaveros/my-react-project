import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate1Features, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template1-feature");
      if (queryClient.getQueryData("template1-feature")) {
        queryClient.setQueryData("template1-feature", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template1-feature", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-feature");
    },
  });
};

export default useCreate;
