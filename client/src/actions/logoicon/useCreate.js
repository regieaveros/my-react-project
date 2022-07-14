import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createLogoIcon, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("logoicon");
      if (queryClient.getQueryData("logoicon")) {
        queryClient.setQueryData("logoicon", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("logoicon", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("logoicon");
    },
  });
};

export default useCreate;
