import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate2WorkShowcase, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template2-work-showcase");
      if (queryClient.getQueryData("template2-work-showcase")) {
        queryClient.setQueryData("template2-work-showcase", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template2-work-showcase", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-work-showcase");
    },
  });
};

export default useCreate;
