import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate2News, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template2-news");
      if (queryClient.getQueryData("template2-news")) {
        queryClient.setQueryData("template2-news", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("template2-news", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-news");
    },
  });
};

export default useCreate;
