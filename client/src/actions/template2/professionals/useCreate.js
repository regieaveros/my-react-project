import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate2Professionals, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template2-professionals");
      if (queryClient.getQueryData("template2-professionals")) {
        queryClient.setQueryData("template2-professionals", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template2-professionals", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-professionals");
    },
  });
};

export default useCreate;
