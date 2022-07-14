import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate2BestServices, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template2-best-services");
      if (queryClient.getQueryData("template2-best-services")) {
        queryClient.setQueryData("template2-best-services", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template2-best-services", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-best-services");
    },
  });
};

export default useCreate;
