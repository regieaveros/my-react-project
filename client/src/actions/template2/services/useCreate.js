import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate2Services, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template2-services");
      if (queryClient.getQueryData("template2-services")) {
        queryClient.setQueryData("template2-services", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template2-services", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-services");
    },
  });
};

export default useCreate;
