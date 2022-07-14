import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createImage, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("image");
      if (queryClient.getQueryData("image")) {
        queryClient.setQueryData("image", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("image", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("image");
    },
  });
};

export default useCreate;
